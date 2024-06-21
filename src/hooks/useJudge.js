import { useAuth } from "./useAuth";
import { useBackend } from "./useBackend";

// Decision Note:
// For now, I opted to implement this functionality through my backend using a wrapper function.
// This approach allows me to manage the current workflow effectively while keeping my options open for future changes.
// As the implementation grows larger, I might decide to send requests directly to the judge service instead of my backend.
// The wrapper function ensures that this works for now, and provides the flexibility to change the underlying implementation in the future if needed.
export const useJudge = () => {
  const { submitUserCode, submitSolution } = useBackend();

  async function executeUserCode(sourceCode, languageId, inputs, questionId) {
    try {
      const response = await submitUserCode(
        sourceCode,
        languageId,
        inputs,
        questionId
      );
      const coderesult = atob(response.stdout);
      return coderesult;
    } catch (error) {
      return "Failed to execute code with error";
    }
  }

  async function executeSolution(questionId, languageId, sourceCode, inputs) {
    try {
      const response = await submitSolution(
        questionId,
        languageId,
        sourceCode,
        inputs
      );
      const coderesult = atob(response.stdout);
      return coderesult;
    } catch (error) {
      return "Failed to execute solution with error";
    }
  }

  return {
    executeUserCode,
    executeSolution,
  };
};
