import React from "react";
import "../../styles/components/user/SocialSignInButtons.css";
const SocialSignInButtons = ({ onSignInWithProvider }) => (
  <div className="signin-options">
    <button
      onClick={() => onSignInWithProvider("google")}
      className="social-btn"
    >
      Continue with Google
    </button>
    <button
      onClick={() => onSignInWithProvider("github")}
      className="social-btn"
    >
      Continue with GitHub
    </button>
    {/* TODO: Add more social buttons in the future */}
  </div>
);

export default SocialSignInButtons;
