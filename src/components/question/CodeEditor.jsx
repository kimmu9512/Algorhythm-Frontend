import React from "react";
import Editor from "@monaco-editor/react";
import "../../styles/components/question/CodeEditor.css";

const CodeEditor = ({ language, code, setCode, defaultValue, title }) => {
  const handleEditorDidMount = (editor, monaco) => {
    monaco.editor.setTheme("vs-dark");
  };

  return (
    <div className="editor-container">
      <h2>{title}</h2>
      <Editor
        language={language}
        value={code}
        onChange={(value) => setCode(value)}
        defaultValue={defaultValue}
        options={{
          fontSize: 20,
        }}
        onMount={handleEditorDidMount}
        className="code-editor"
      />
    </div>
  );
};

export default CodeEditor;
