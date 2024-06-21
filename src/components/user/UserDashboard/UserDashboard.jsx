import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { useBackend } from "../../../hooks/useBackend";
import ReviewQuestions from "./ReviewQuestions";
import ExploreQuestions from "./ExploreQuestions";
import AllQuestions from "./AllQuestions";
import "../../../styles/components/user/UserDashboard.css";

function UserDashboard() {
  const {
    fetchSuggestedQuestions,
    fetchAllQuestions,
    loading: backendLoading,
    error,
  } = useBackend();
  const [repeatQuestions, setRepeatQuestions] = useState([]);
  const [exploreQuestions, setExploreQuestions] = useState([]);
  const [allQuestions, setAllQuestions] = useState([]);
  const [activeTab, setActiveTab] = useState("explore-review");
  const navigate = useNavigate();
  const { currentUser, loading: authLoading, signOutUser, isAdmin } = useAuth();

  useEffect(() => {
    let isMounted = true;
    const loadQuestions = async () => {
      if (currentUser && isMounted && !authLoading) {
        try {
          const { repetition, explore } = await fetchSuggestedQuestions();
          if (isMounted) {
            setRepeatQuestions(repetition);
            setExploreQuestions(explore);
          }
          const allQuestionsData = await fetchAllQuestions();
          if (isMounted) {
            setAllQuestions(allQuestionsData);
          }
        } catch (error) {
          if (error.response && error.response.status === 404) {
            alert("Authentication/server errors, sending back to signin Page");
            navigate("/signin");
          }
        }
      }
    };
    loadQuestions();
    return () => {
      isMounted = false;
    };
  }, [authLoading, currentUser]);

  const handleLogout = async () => {
    try {
      await signOutUser();
      navigate("/signin");
    } catch (error) {
      alert("Failed to logout");
    }
  };

  if (authLoading || backendLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>

      {isAdmin && (
        <button
          onClick={() => navigate("/new-question")}
          className="admin-button"
        >
          Admin Panel
        </button>
      )}
      <div className="tab-navigation">
        <button
          onClick={() => setActiveTab("explore-review")}
          className={activeTab === "explore-review" ? "active" : ""}
        >
          Explore & Review Questions
        </button>
        <button
          onClick={() => setActiveTab("all-questions")}
          className={activeTab === "all-questions" ? "active" : ""}
        >
          All Questions
        </button>
      </div>
      <div
        className={`tab-content ${
          activeTab === "explore-review" ? "active" : ""
        }`}
      >
        {activeTab === "explore-review" && (
          <>
            <ReviewQuestions questions={repeatQuestions} navigate={navigate} />
            <ExploreQuestions
              questions={exploreQuestions}
              navigate={navigate}
            />
          </>
        )}
      </div>
      <div
        className={`tab-content ${
          activeTab === "all-questions" ? "active" : ""
        }`}
      >
        {activeTab === "all-questions" && (
          <AllQuestions questions={allQuestions} navigate={navigate} />
        )}
      </div>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
}

export default UserDashboard;
