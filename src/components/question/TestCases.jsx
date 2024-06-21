import React from "react";
import InputField from "./InputField";
import OutputGroup from "./OutputGroup";
import "../../styles/components/question/TestCases.css";
const TestCases = ({
  inputs,
  setInputs,
  questionId,
  output,
  setOutput,
  codeResults,
  setCodeResults,
  solutionCode,
  code,
}) => {
  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = { ...newInputs[index], value };
    setInputs(newInputs);
  };

  return (
    <div className="test-cases">
      <h2>Test Cases</h2>
      {inputs.length === 0 ? (
        <p>No inputs for this question.</p>
      ) : (
        inputs.map((input, index) => (
          <InputField
            key={index}
            label={input.input_name}
            value={input.value || input.example_value}
            placeholder={input.example_value}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        ))
      )}
      <OutputGroup
        inputs={inputs}
        questionId={questionId}
        output={output}
        setOutput={setOutput}
        codeResults={codeResults}
        setCodeResults={setCodeResults}
        solutionCode={solutionCode}
        code={code}
      />
    </div>
  );
};

export default TestCases;
