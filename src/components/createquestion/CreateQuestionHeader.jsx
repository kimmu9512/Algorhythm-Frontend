import React from "react";
import "../../styles/components/createquestion/CreateQuestionHeader.css";

const CreateQuestionHeader = ({ goBackToTitlePage, submit }) => (
  <nav className="question-header">
    <button className="nav-buttons" onClick={goBackToTitlePage}>
      &gt; Back to Dashboard
    </button>
    <button className="nav-buttons" onClick={submit}>
      Create Question
    </button>
  </nav>
);

export default CreateQuestionHeader;
