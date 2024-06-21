import React from "react";
import CodeEditor from "./CodeEditor";
import TestCases from "./TestCases";
import "../../styles/components/question/QuestionInteraction.css";
const QuestionInteraction = ({
  question,
  code,
  setCode,
  inputs,
  setInputs,
  output,
  setOutput,
  codeResults,
  setCodeResults,
}) => (
  <div className="question-interaction">
    <CodeEditor
      title="</> Code"
      language="python"
      code={code}
      setCode={setCode}
      defaultValue={question.default_code}
    />
    <TestCases
      inputs={inputs}
      setInputs={setInputs}
      questionId={question.id}
      output={output}
      setOutput={setOutput}
      codeResults={codeResults}
      setCodeResults={setCodeResults}
      solutionCode={question.solution}
      code={code}
    />
  </div>
);

export default QuestionInteraction;
