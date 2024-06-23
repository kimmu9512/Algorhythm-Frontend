import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import SignInForm from "./SignInForm";
import SocialSignInButtons from "./SocialSignInButtons";
import "../../styles/components/user/SignInPage.css";
const SignInPage = () => {
  const { signIn, signInWithProvider } = useAuth();
  const navigate = useNavigate();

  const handleSignInWithEmail = async (email, password) => {
    try {
      await signIn(email, password);
      navigate("/");
    } catch (error) {
      alert(`Failed to sign in please try again`);
    }
  };

  const handleSignInWithProvider = async (providerName) => {
    try {
      await signInWithProvider(providerName);
      navigate("/");
    } catch (error) {
      alert(`Failed to sign in with ${providerName} please try again`);
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-container">
        <h2>Welcome back</h2>
        <SignInForm onSignIn={handleSignInWithEmail} signIn={true} />
        <div className="signup-section">
          <span className="signup-text">Don't have an account? </span>
          <span className="signup-link" onClick={() => navigate("/signup")}>
            Register
          </span>
        </div>
        <div className="divider">
          <span className="or">OR</span>
        </div>
        <SocialSignInButtons onSignInWithProvider={handleSignInWithProvider} />
      </div>
    </div>
  );
};

export default SignInPage;
