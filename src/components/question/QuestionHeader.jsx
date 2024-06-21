import React from "react";
import Timer from "./Timer";
import "../../styles/components/question/QuestionHeader.css";

const QuestionHeader = ({
  goBackToTitlePage,
  toggleVideoModal,
  handleStart,
  handleFinish,
}) => (
  <nav className="question-header">
    <button className="nav-buttons" onClick={goBackToTitlePage}>
      &gt; Back to Dashboard
    </button>
    <Timer onStart={handleStart} onFinish={handleFinish} />
    <button className="solution-buttons" onClick={toggleVideoModal}>
      Watch Solution
    </button>
  </nav>
);

export default QuestionHeader;
