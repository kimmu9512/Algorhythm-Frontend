import React from "react";
import parse from "html-react-parser";
import ReactMarkdown from "react-markdown";
import "../../styles/components/question/QuestionDescription.css";
const QuestionDescription = ({ title, description }) => {
  return (
    <div className="question-description">
      <div className="description-text">
        <h1>{title}</h1>
        <div className="markdown-container">{parse(description)}</div>
      </div>
    </div>
  );
};

export default QuestionDescription;
