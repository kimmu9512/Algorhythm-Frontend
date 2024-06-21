import { useState, useEffect, useCallback } from "react";
import { useBackend } from "./useBackend";

const useQuestionData = (id) => {
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [videoUrl, setVideoUrl] = useState("");
  const [codeResults, setCodeResults] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState(null);
  const [inputs, setInputs] = useState([]);
  const [code, setCode] = useState("");
  const [languageId, setLanguageId] = useState(92);

  const {
    fetchQuestion,
    loading: backendLoading,
    error: backendError,
  } = useBackend();

  const fetchData = useCallback(async () => {
    try {
      const { question, inputs } = await fetchQuestion(id);
      setQuestion(question);
      setVideoUrl(question.video_url);
      setInputs(inputs);
      setCode(question.default_code || "");
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }, [fetchQuestion, id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    setLoading(backendLoading);
    setError(backendError);
  }, [backendLoading, backendError]);

  return {
    question,
    loading,
    error,
    inputs,
    setInputs,
    code,
    setCode,
    videoUrl,
    output,
    setOutput,
    codeResults,
    setCodeResults,
  };
};

export default useQuestionData;
