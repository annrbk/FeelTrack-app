import { Option, TestResult } from "../types/tests";
import { useState } from "react";
import { useEffect } from "react";
import { tests } from "../constants/tests/allTests";

export const useTestActions = (id: string) => {
  const [answers, setAnswers] = useState<Array<number | null> | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState<TestResult | null>(null);

  const selectedTest = tests.find((test) => test.id === id);

  useEffect(() => {
    if (!selectedTest) return;
    setAnswers(new Array(selectedTest.questions.length).fill(null));
    setCurrentQuestion(0);
    setResult(null);
  }, [id, selectedTest]);

  const handleNext = () => {
    if (!selectedTest) return;
    if (!answers || answers[currentQuestion] == null) return;
    if (currentQuestion < selectedTest.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const selectOption = (option: Option) => {
    setAnswers((prevAnswers) => {
      if (!prevAnswers) return null;
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestion] = option.score;
      return updatedAnswers;
    });
  };

  const isDisabled = !answers || answers[currentQuestion] == null;

  return {
    selectedTest,
    answers,
    currentQuestion,
    result,
    setResult,
    handleNext,
    handlePrevious,
    selectOption,
    isDisabled,
  };
};
