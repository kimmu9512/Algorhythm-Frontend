import React from "react";
import { Link } from "react-router-dom";
import "../../styles/common/NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">
        Oops! The page you're looking for doesn't exist, or you don't have
        access to it. Please try again or log in again.
      </p>
      <Link to="/" className="home-link">
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
