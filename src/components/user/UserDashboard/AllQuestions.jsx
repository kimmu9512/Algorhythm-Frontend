import "../../../styles/components/user/AllQuestions.css";

function AllQuestions({ questions, navigate }) {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} minute(s) and ${remainingSeconds} second(s)`;
  };
  return (
    <div className="all-questions-container">
      <h2>All Questions</h2>
      <h3>These are all questions Algorhythm offers</h3>
      <div className="all-questions-header">
        <span>Problem</span>
        <span>Difficulty</span>
        <span>Type</span>
        <span>Recent Solve Time</span>
        <span>Last Completion Date</span>
      </div>
      {questions.length > 0 ? (
        questions.map((question) => {
          const difficultyClass = `difficulty-${question.difficulty.toLowerCase()}`;
          return (
            <div
              key={question.id}
              onClick={() => navigate(`/question/${question.id}`)}
              className="all-question"
            >
              <h4>{question.title}</h4>
              <p className={difficultyClass}>{question.difficulty}</p>
              <p>{question.category}</p>
              <p>
                {question.prev_time === null
                  ? "-"
                  : formatTime(question.prev_time)}
              </p>
              <p>
                {question.last_solved === null ? "-" : question.last_solved}
              </p>
            </div>
          );
        })
      ) : (
        <p>No more challenges left for Today!</p>
      )}
    </div>
  );
}

export default AllQuestions;
