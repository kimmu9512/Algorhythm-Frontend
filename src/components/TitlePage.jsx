import React, { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import WelcomeMessage from "./user/WelcomeMessage";
import "../styles/TitlePage.css";
const TitlePage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/dashboard");
    }
  }, [currentUser, navigate]);

  return (
    <div className="page-container">{!currentUser && <WelcomeMessage />}</div>
  );
};

export default TitlePage;
