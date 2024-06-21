import React, { useState, useImperativeHandle, forwardRef } from "react";
import "../../styles/components/createquestion/TestCaseCard.css";

const TestCaseCard = forwardRef(
  (
    {
      name = "",
      value = "",
      placeholderName,
      placeholderValue,
      changeable,
      onDelete,
    },
    ref
  ) => {
    const [nameInput, setNameInput] = useState(name);
    const [variableInput, setVariableInput] = useState(value);

    useImperativeHandle(ref, () => ({
      getParameter: () => [nameInput, variableInput],
      setName: (newName) => setNameInput(newName),
      setValue: (newValue) => setVariableInput(newValue),
    }));

    const handleNameChange = (e) => {
      setNameInput(e.target.value);
    };

    const handleVariableChange = (e) => {
      setVariableInput(e.target.value);
    };

    return (
      <div className="test-case-card">
        <button className="delete-button" onClick={onDelete}>
          X
        </button>
        <label className="input-label">Parameters</label>
        <input
          type="text"
          id="variableName"
          value={nameInput}
          placeholder={placeholderName}
          readOnly={!changeable}
          onChange={changeable ? handleNameChange : undefined}
        />
        <input
          type="text"
          id="variableValue"
          value={variableInput}
          placeholder={placeholderValue}
          readOnly={!changeable}
          onChange={changeable ? handleVariableChange : undefined}
        />
      </div>
    );
  }
);

export default TestCaseCard;
