import React, { useState } from "react";
import "../../styles/components/user/SignInForm.css";
const SignInForm = ({ onSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignIn(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="signin-form">
      <input
        type="email"
        placeholder="Email address"
        className="signin-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="signin-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="continue-button">
        Continue
      </button>
    </form>
  );
};

export default SignInForm;
