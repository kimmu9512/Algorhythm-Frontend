import React, {
  useState,
  useRef,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from "react";
import TestCaseCard from "./TestCaseCard";
import "../../styles/components/createquestion/CreateQuestionTestCases.css";

const CreateQuestionTestCases = forwardRef((props, ref) => {
  const [testCases, setTestCases] = useState([]);
  const testCaseRef = useRef();
  useImperativeHandle(ref, () => ({
    getTestCases: () => testCases,
  }));

  const handleAddTestCase = () => {
    const [name, value] = testCaseRef.current.getParameter();
    if (name && value) {
      setTestCases([...testCases, { id: Date.now(), name, value }]);
      testCaseRef.current.setName("");
      testCaseRef.current.setValue("");
    }
  };

  const handleDeleteEditable = () => {
    testCaseRef.current.setName("");
    testCaseRef.current.setValue("");
  };

  const handleDeleteTestCase = useCallback((id) => {
    setTestCases((prevTestCases) =>
      prevTestCases.filter((testCase) => testCase.id !== id)
    );
  }, []);

  return (
    <>
      <div className="test-case-container">
        <h2 className="test-case-header">Add Test Case</h2>
        <p>
          Make sure parameters from the code and test case parameters are in
          order.
        </p>
        <div className="test-case-card-container">
          <TestCaseCard
            ref={testCaseRef}
            placeholderName="Enter variable name"
            placeholderValue="Enter value"
            changeable={true}
            onDelete={handleDeleteEditable}
          />
          <button className="add-test-case-button" onClick={handleAddTestCase}>
            Add Test Case
          </button>
        </div>
        <div className="test-case-list">
          {testCases.map((testCase) => (
            <TestCaseCard
              key={testCase.id}
              name={testCase.name}
              value={testCase.value}
              changeable={false}
              onDelete={() => handleDeleteTestCase(testCase.id)}
              className="parameter-cards"
            />
          ))}
        </div>
      </div>
    </>
  );
});
export default CreateQuestionTestCases;
