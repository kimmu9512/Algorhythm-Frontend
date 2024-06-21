import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useRef,
} from "react";
import CodeEditor from "../question/CodeEditor.jsx";
import "../../styles/components/createquestion/CreateQuestionInteraction.css";
import CreateQuestionTestCases from "./CreateQuestionTestCases.jsx";
const CreateQuestionInteraction = forwardRef((props, ref) => {
  const [code, setCode] = useState("class Solution: ");
  const parametersRef = useRef();

  useImperativeHandle(ref, () => ({
    getValues: () => {
      const testCases = parametersRef.current.getTestCases();
      return { code, testCases };
    },
  }));

  return (
    <div className="create-question-interaction">
      <CodeEditor
        title="</> Code"
        language="python"
        code={code}
        setCode={setCode}
        defaultValue="class Solution: "
      />
      <CreateQuestionTestCases ref={parametersRef} />
    </div>
  );
});

export default CreateQuestionInteraction;
