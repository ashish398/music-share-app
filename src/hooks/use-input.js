import { useState } from "react";

const useInput = (validate) => {
  const [input, setInput] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const inputIsValid = validate(input);
  const hasError = !inputIsValid && inputTouched;

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const inputBlurHandler = () => {
    setInputTouched(true);
  };
  const reset = () => {
    setInput("");
    setInputTouched(false);
  };
  return {
    input,
    hasError,
    inputBlurHandler,
    inputChangeHandler,
    inputIsValid,
    reset
  };
};

export default useInput;
