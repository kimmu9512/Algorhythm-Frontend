import "../../../styles/components/user/ReviewQuestions.css";

function ReviewQuestions({ questions, navigate }) {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} minute(s) and ${remainingSeconds} second(s)`;
  };
  return (
    <div className="reviewQuestions-container">
      <h2>Review Questions</h2>
      <h3>Keep your skills sharp by revisiting problems periodically.</h3>

      <div className="questions-header">
        <span>Problem</span>
        <span>Difficulty</span>
        <span>Last Attempt</span>
        <span>Type</span>
      </div>
      {questions.length > 0 ? (
        questions.map((question) => {
          const difficultyClass = `difficulty-${question.difficulty.toLowerCase()}`;
          return (
            <div
              key={question.id}
              onClick={() => navigate(`/question/${question.id}`)}
              className="question"
            >
              <span>{question.title}</span>
              <span className={difficultyClass}>{question.difficulty}</span>
              <span className="prev-time">
                {formatTime(question.prev_time)}
              </span>
              <span>{question.category}</span>
            </div>
          );
        })
      ) : (
        <h3>All caught up! No reviews needed right now.</h3>
      )}
    </div>
  );
}

export default ReviewQuestions;
