import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import SignInForm from "./SignInForm";
import SocialSignInButtons from "./SocialSignInButtons";
import "../../styles/components/user/SignInPage.css";

const SignInPage = () => {
  const { signUp, signUpWithProvider } = useAuth();
  const navigate = useNavigate();

  const handleSignUpWithEmail = async (email, password) => {
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      alert(`Failed to sign up with email, please try again.`);
    }
  };

  const handleSignUpWithProvider = async (providerName) => {
    try {
      await signUpWithProvider(providerName);
      navigate("/");
    } catch (error) {
      alert(`Failed to sign in with ${providerName}, please try again`);
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-container">
        <h2>Welcome back</h2>
        <SignInForm onSignIn={handleSignUpWithEmail} signIn={false} />
        <div className="signup-section">
          <span className="signup-text">Already have an account ? </span>
          <span className="signup-link" onClick={() => navigate("/signin")}>
            Sign In
          </span>
        </div>
        <div className="divider">
          <span className="or">OR</span>
        </div>
        <SocialSignInButtons onSignInWithProvider={handleSignUpWithProvider} />
      </div>
    </div>
  );
};

export default SignInPage;
