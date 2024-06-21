import "../../../styles/components/user/ExploreQuestions.css";

function ExploreQuestions({ questions, navigate }) {
  return (
    <div className="exploreQuestions-container">
      <h2>Today's Challenge</h2>
      <h3>Tackle a new challenge every day to keep learning and growing!</h3>
      <div className="questions-header">
        <span>Problem</span>
        <span>Difficulty</span>
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
              <h4>{question.title}</h4>
              <p className={difficultyClass}>{question.difficulty}</p>
              <p>{question.category}</p>
            </div>
          );
        })
      ) : (
        <p>No more challenges left for Today!</p>
      )}
    </div>
  );
}

export default ExploreQuestions;
