import axios from "axios";
import { useState, useCallback } from "react";
import { useAuth } from "./useAuth";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const useBackend = () => {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const makeRequest = useCallback(
    (endpoint, options = {}, isProtected = false) => {
      setLoading(true);
      const headers = isProtected
        ? { Authorization: `Bearer ${currentUser?.accessToken}` }
        : {};
      return axios({
        url: `${backendUrl}/${endpoint}`,
        headers,
        ...options,
      })
        .then((response) => {
          setLoading(false);
          return response.data;
        })
        .catch((err) => {
          setLoading(false);
          throw new Error("Failed to fetch data from the server");
        });
    },
    [currentUser?.accessToken]
  );

  const fetchSuggestedQuestions = useCallback(async () => {
    return await makeRequest("questions/suggestions", {}, true);
  }, [makeRequest]);
  const fetchAllQuestions = useCallback(async () => {
    return await makeRequest("questions/user-questions", {}, true);
  }, [makeRequest]);

  const submitQuestionData = useCallback(
    async (questionData) => {
      return await makeRequest(
        "admin/add-question",
        {
          method: "POST",
          data: questionData,
        },
        true
      );
    },
    [makeRequest]
  );

  const signIn = useCallback(
    async (credentials) => {
      return await makeRequest("auth/signin", {
        method: "POST",
        data: credentials,
      });
    },
    [makeRequest]
  );

  const recordAttempt = useCallback(
    async (questionTitle, startTime, endTime) => {
      return await makeRequest(
        `questions/attempt/${encodeURIComponent(questionTitle)}`,
        {
          method: "POST",
          data: {
            startTime: startTime.toISOString(),
            endTime: endTime.toISOString(),
          },
        },
        true
      );
    },
    [makeRequest]
  );

  const fetchQuestion = useCallback(
    async (id) => {
      const questionResponse = await makeRequest(`questions/${id}`);
      const inputsResponse = await makeRequest(`questions/input/${id}`);
      return {
        question: questionResponse,
        inputs: inputsResponse,
      };
    },
    [makeRequest]
  );
  const submitUserCode = useCallback(
    async (sourceCode, languageId, inputs, questionId) => {
      const predefinedCode = `
def main():
    import json
    input_data = input()  # Reads a single line of input
    data = json.loads(input_data)  # Parses the input JSON string into a Python dictionary
    method_name = data.get("method")
    args = data.get("args")

    sol = Solution()
    solve = getattr(sol, method_name, None)

    if solve and callable(solve):
        result = solve(*args)
        print(json.dumps(result))  # Output the result as a JSON string.
    else:
        print(f"No method named '{method_name}' found in Solution class.")

if __name__ == '__main__':
    main()
`;
      const combinedCode = sourceCode + predefinedCode;
      const encodedSource = btoa(combinedCode);

      const response = await makeRequest(
        "judge/submit",
        {
          method: "POST",
          data: {
            source_code: encodedSource,
            language_id: languageId,
            inputs: inputs,
            question_id: questionId,
          },
        },
        true
      );

      return response;
    },
    [makeRequest]
  );
  const submitSolution = useCallback(
    async (questionId, languageId, sourceCode, inputs) => {
      const encodedSource = btoa(sourceCode);

      const response = await makeRequest(
        `judge/solution/${questionId}`,
        {
          method: "POST",
          data: {
            source_code: encodedSource,
            language_id: languageId,
            inputs: inputs,
          },
        },
        true
      );

      return response;
    },
    [makeRequest]
  );

  return {
    fetchSuggestedQuestions,
    fetchAllQuestions,
    submitQuestionData,
    signIn,
    recordAttempt,
    fetchQuestion,
    submitUserCode,
    submitSolution,
    loading,
    error,
  };
};
