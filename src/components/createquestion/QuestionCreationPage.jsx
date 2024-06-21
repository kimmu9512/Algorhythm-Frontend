import CreateQuestionHeader from "./CreateQuestionHeader.jsx";
import CreateQuestionDescription from "./CreateQuestionDescription.jsx";
import CreateQuestionInteraction from "./CreateQuestionInteraction.jsx";
import { useNavigate } from "react-router-dom";
import React, { useRef } from "react";
import { useBackend } from "../../hooks/useBackend.js";
import "../../styles/components/createquestion/QuestionCreationPage.css";

function QuestionCreationPage() {
  const navigate = useNavigate();
  const questionDescriptionRef = useRef();
  const questionInteractionRef = useRef();
  const { submitQuestionData } = useBackend();
  const handleGetValues = () => {
    if (questionDescriptionRef.current && questionInteractionRef.current) {
      const descriptionValues = questionDescriptionRef.current.getValues();
      const interactionValues = questionInteractionRef.current.getValues();

      const exportValue = { descriptionValues, interactionValues };
      submitQuestionData(exportValue)
        .then((response) => {
          alert(response.message);
          goBackToTitlePage();
        })
        .catch((error) => alert("Error submitting question data try again"));
    }
  };

  const goBackToTitlePage = () => {
    navigate("/");
  };
  return (
    <>
      <CreateQuestionHeader
        goBackToTitlePage={goBackToTitlePage}
        submit={handleGetValues}
      />
      <div className="question-page-container">
        <CreateQuestionDescription ref={questionDescriptionRef} />
        <CreateQuestionInteraction ref={questionInteractionRef} />
      </div>
    </>
  );
}
export default QuestionCreationPage;
