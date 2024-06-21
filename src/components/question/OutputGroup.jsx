import React from "react";
import InputField from "./InputField";
import { useJudge } from "../../hooks/useJudge";
import "../../styles/components/question/OutputGroup.css";
const OutputGroup = ({
  inputs,
  questionId,
  output,
  setOutput,
  codeResults,
  setCodeResults,
  solutionCode,
  code,
}) => {
  const { executeUserCode, executeSolution } = useJudge();

  const handleSubmit = async () => {
    if (inputs.some((input) => !input.hasOwnProperty("value"))) {
      alert("Invalid inputs, please enter a valid input");
      return;
    }
    const codeReply = await executeUserCode(code, 92, inputs, questionId);
    setCodeResults(codeReply);
  };

  const handleInputSubmit = async () => {
    try {
      if (inputs.some((input) => !input.hasOwnProperty("value"))) {
        alert("Invalid inputs, please enter a valid input");
        return;
      }
      setOutput("Running code...");
      const codeReply = await executeSolution(
        questionId,
        92,
        solutionCode,
        inputs
      );
      setOutput(codeReply);
    } catch (error) {
      alert("Invalid inputs, please enter a valid input");
    }
  };

  return (
    <div className="output-group">
      <div className="expected-container">
        <InputField
          label="Expected Output"
          value={output}
          placeholder="Run solution code"
          readOnly
          className="expected-card"
        />
        <button className="check-button" onClick={handleInputSubmit}>
          Check expected output
        </button>
      </div>
      <div className="your-container">
        <InputField
          label="Your Output"
          value={codeResults}
          placeholder="Run my code"
          readOnly
        />
        <button className="check-button" onClick={handleSubmit}>
          Check your code output
        </button>
      </div>
    </div>
  );
};

export default OutputGroup;
