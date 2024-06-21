import React, { useState, useImperativeHandle, forwardRef } from "react";
import "../../styles/components/createquestion/CreateQuestionDescription.css";

const QuestionDescription = forwardRef((props, ref) => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [functionName, setFunctionName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const categories = [
    "Arrays and Hashing",
    "Two Pointers",
    "Stack",
    "Binary Search",
    "Linked List",
    "Trees",
    "Tries",
    "Heap",
    "Intervals",
    "Greedy",
    "Graphs",
    "Backtracking",
    "Dynamic Programming",
  ];
  const difficulties = ["Easy", "Medium", "Hard"];
  useImperativeHandle(ref, () => ({
    getValues: () => ({
      questionTitle,
      description,
      videoUrl,
      functionName,
      selectedCategory,
      selectedDifficulty,
    }),
    setQuestionTitle,
    setDescription,
    setVideoUrl,
    setFunctionName,
    setSelectedCategory,
    setSelectedDifficulty,
  }));

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  const handleDifficultyChange = (e) => {
    setSelectedDifficulty(e.target.value);
  };
  return (
    <div className="question-description">
      <input
        type="text"
        placeholder="Enter question title"
        value={questionTitle}
        onChange={(e) => setQuestionTitle(e.target.value)}
        className="question-input"
      />
      <p className="allowed-tags">
        Allowed HTML tags: <code>&lt;p&gt;</code>, <code>&lt;code&gt;</code>,{" "}
        <code>&lt;strong&gt;</code>, <code>&lt;h3&gt;</code>,{" "}
        <code>&lt;pre&gt;</code>, <code>&lt;ul&gt;</code>,{" "}
        <code>&lt;li&gt;</code>, <code>&lt;sup&gt;</code>
      </p>
      <textarea
        placeholder="Enter question description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="question-textarea"
      />
      <div className="category-youtube-container">
        <input
          type="text"
          placeholder="Enter Youtube video url"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          className="selection-input"
        />
        <input
          type="text"
          placeholder="Enter function name"
          value={functionName}
          onChange={(e) => setFunctionName(e.target.value)}
          className="selection-input"
        />
        <div className="category-selector">
          <select
            value={selectedCategory}
            onChange={handleChange}
            className="dropdown-menu"
          >
            <option value="">Select a Category</option>{" "}
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="difficulty-selector">
          <select
            value={selectedDifficulty}
            onChange={handleDifficultyChange}
            className="dropdown-menu"
          >
            <option value="">Select Difficulty</option>
            {difficulties.map((difficulty, index) => (
              <option key={index} value={difficulty}>
                {difficulty}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
});

export default QuestionDescription;
