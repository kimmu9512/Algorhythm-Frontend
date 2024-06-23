import { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAdditionalUserInfo,
  onAuthStateChanged,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebaseConfig";
import axios from "axios";
const backendUrl = import.meta.env.VITE_BACKEND_URL;
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    let authChecked = false;
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!authChecked) {
        setCurrentUser(user);
      }
      if (user) {
        user
          .getIdTokenResult()
          .then((idTokenResult) => {
            setIsAdmin(!!idTokenResult.claims.admin);
          })
          .catch((error) => {
            throw new Error("Failed to fetch ID token");
          });
      } else {
        setIsAdmin(false);
      }
      setLoading(false);
      authChecked = true;
    });
    return unsubscribe;
  }, []);

  const getProvider = (providerType) => {
    switch (providerType) {
      case "google":
        return googleProvider;
      case "github":
        return githubProvider;
      // Add more cases for other providers
      default:
        throw new Error(`Unsupported provider: ${providerType}`);
    }
  };

  const signUp = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const idToken = await userCredential.user.getIdToken();

      const response = await axios.post(`${backendUrl}/auth/register`, {
        email,
        idToken,
      });
      return userCredential;
    } catch (error) {
      throw new Error("Failed to sign up with email and password");
    }
  };
  const signUpWithProvider = async (providerType) => {
    try {
      const provider = getProvider(providerType);

      const userCredential = await signInWithPopup(auth, provider);

      const { email, uid } = userCredential.user;

      const idToken = await userCredential.user.getIdToken();

      const response = await axios.post(`${backendUrl}/auth/register`, {
        email,
        idToken,
      });

      return userCredential;
    } catch (error) {
      throw new Error("Failed to sign up with provider");
    }
  };
  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential;
    } catch (error) {
      throw new Error("Failed to sign in with existing account");
    }
  };
  const signInWithProvider = async (providerType) => {
    const provider = getProvider(providerType);
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const { email, uid } = userCredential.user;
      const checkResponse = await axios.get(`${backendUrl}/auth/checkUser`, {
        params: { email },
      });
      if (!checkResponse.data.exists) {
        const registerResponse = await axios.post(
          `${backendUrl}/auth/register`,
          {
            email,
            idToken: await userCredential.user.getIdToken(),
          }
        );

        if (registerResponse.status !== 201) {
          throw new Error("Failed to register user on database");
        }
      }
      return userCredential;
    } catch (error) {
      throw new Error("Failed to sign in with provider");
    }
  };
  const signOutUser = () => {
    return signOut(auth)
      .then(() => {
        console.log("User signed out");
        setIsAdmin(false);
      })
      .catch((error) => {
        throw new Error("Failed to sign out");
      });
  };

  return {
    currentUser,
    isAdmin,
    loading,
    signUp,
    signIn,
    signInWithProvider,
    signUpWithProvider,
    signOutUser,
  };
};
