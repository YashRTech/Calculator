import Calculator from "./calculate.js";

function handleKeyboardInput(e) {
  if (e.key >= 0 && e.key <= 9) handleNums(e.key);
  if (e.key === ".") appendPoint();
  if (e.key === "=" || e.key === "Enter") evaluate();
  if (e.key === "Backspace") backspace();
  if (e.key === "Escape") clear();
  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/")
    handleOperators(e.key);
}

// window.addEventListener("keydown", handleKeyboardInput);

export const Status = (() => {
  const defaultStatus = {
    a: "",
    b: "",
    result: "0",
    prevResult: "",
    currentOperator: "",
  };
  let currentStatus = { ...defaultStatus };

  const resetStatus = () => {
    return (currentStatus = { ...defaultStatus });
  };
  const getCurrentStatus = () => currentStatus;

  const updateA = (a) => {
    currentStatus.a += a;
  };
  const updateB = (a) => {
    currentStatus.b += b;
  };
  const updateOperator = (operator) => {
    currentStatus.currentOperator = operator;
  };
  const updateResult = (result) => {
    currentStatus.result = result;
  };
  const updatePreviousResult = (prevResult) => {
    currentStatus.result = prevResult;
  };

  return {
    resetStatus,
    getCurrentStatus,
    updateA,
    updateB,
    updateOperator,
    updateResult,
    updatePreviousResult,
  };
})();

export const displayDom = (() => {
  const nums = document.querySelectorAll("[data-num]");
  const operators = document.querySelectorAll("[data-operator]");
  const dataPoint = document.querySelector("[data-point]");
  const result = document.querySelector(".result");
  const prevResult = document.querySelector(".previousResult");
  const a = document.querySelector(".a");
  const b = document.querySelector(".b");

  const displayNums = (num) => {
    b.textContent += num;
  };
})();



nums.addEventListener(click)