import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/components/user/WelcomeMessage.css";
const WelcomeMessage = () => {
  const navigate = useNavigate();

  return (
    <div className="container-title">
      <h2>
        Introducing <span className="highlight">Algorhythm</span>
      </h2>
      <h3>
        Designed to help you improve your Leetcode skills and ace your next
        interview.
      </h3>
      <p>
        Repeats questions based on <strong>your performance.</strong>
      </p>
      <p>
        Enhances retention <strong>without</strong> rote learning.
      </p>
      <p>
        Suggests new category of questions based on
        <strong> your history</strong>
      </p>
      <p>
        Questions <strong>hand-picked</strong> just for you.
      </p>

      <div>
        <button onClick={() => navigate("/signin")}>Sign In</button>
        <button onClick={() => navigate("/signup")}>Register</button>
      </div>
    </div>
  );
};

export default WelcomeMessage;
