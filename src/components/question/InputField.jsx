import React from "react";
import "../../styles/components/question/InputField.css";
const InputField = ({
  label,
  value,
  placeholder,
  onChange,
  readOnly = false,
}) => {
  label = label.charAt(0).toUpperCase() + label.slice(1);
  return (
    <div className="input-group">
      {label && <label className="input-text">{label}</label>}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        className="input-box"
      />
    </div>
  );
};

export default InputField;
