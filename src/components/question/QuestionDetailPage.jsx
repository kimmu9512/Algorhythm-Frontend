import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "../../styles/components/question/QuestionDetailPage.css";
import VideoModal from "./VideoModal";
import Timer from "./Timer";
import QuestionDescription from "./QuestionDescription";
import QuestionHeader from "./QuestionHeader";
import QuestionInteraction from "./QuestionInteraction";
import useQuestionData from "../../hooks/useQuestionData";
import { useBackend } from "../../hooks/useBackend";

function QuestionDetailPage() {
  const { id } = useParams();
  const [isVideoModalOpen, setVideoModalOpen] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { recordAttempt } = useBackend();
  const {
    question,
    loading,
    error,
    inputs,
    setInputs,
    code,
    setCode,
    videoUrl,
    setOutput,
    output,
    codeResults,
    setCodeResults,
  } = useQuestionData(id);

  const toggleVideoModal = () => {
    setVideoModalOpen(!isVideoModalOpen);
  };

  const handleStart = (startTime) => {
    setStartTime(startTime);
  };

  const handleFinish = async (startTime, finishTime) => {
    setEndTime(finishTime);
    alert("Question finished");
    if (question) {
      try {
        await recordAttempt(question.title, startTime, finishTime);
      } catch (error) {
        alert(
          "Error recording attempt to the server, please press finish again. "
        );
      }
    }
  };

  const goBackToTitlePage = () => {
    navigate("/");
  };
  useEffect(() => {}, [loading, error]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading question data</div>;
  }

  if (!question) {
    return <div>No question data available</div>;
  }

  return (
    <>
      <QuestionHeader
        goBackToTitlePage={goBackToTitlePage}
        toggleVideoModal={toggleVideoModal}
        handleStart={handleStart}
        handleFinish={handleFinish}
      />
      <VideoModal
        isOpen={isVideoModalOpen}
        close={toggleVideoModal}
        videoUrl={videoUrl}
      />
      <div className="question-page-container">
        <QuestionDescription
          title={question.title}
          description={question.description}
        />
        <QuestionInteraction
          question={question}
          code={code}
          setCode={setCode}
          inputs={inputs}
          setInputs={setInputs}
          output={output}
          setOutput={setOutput}
          codeResults={codeResults}
          setCodeResults={setCodeResults}
        />
      </div>
    </>
  );
}

export default QuestionDetailPage;
