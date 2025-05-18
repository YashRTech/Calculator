import "./styles/style.css";
import "./styles/footer.css";

const Status = (() => {
  const defaultStatus = {
    a: "",
    b: "",
    result: "0",
    prevResult: "",
    currentOperator: "",
  };
  let currentStatus = { ...defaultStatus };

  const resetStatus = () => {
    currentStatus = { ...defaultStatus }
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

  const getA = () => a;
  const getB = () => b;

  return {
    resetStatus,
    getCurrentStatus,
    updateA,
    updateB,
    updateOperator,
    updateResult,
    updatePreviousResult,
    getA,
    getB,
  };
})();

const displayDom = (() => {
  const result = document.querySelector(".result");
  const prevResult = document.querySelector(".previousResult");
  const a = document.querySelector(".a");
  const b = document.querySelector(".b");

  const displayNums = (num) => {
      result.textContent = num;
  };
  const displayResult = (res) => {
    result.textContent = res;
  };

  return { displayNums, displayResult };
})();

const nums = document.querySelectorAll("[data-num]");
const operators = document.querySelectorAll("[data-operator]");
const dataPoint = document.querySelector("[data-point]");
const result = document.querySelector(".result");
const prevResult = document.querySelector(".previousResult");
const a = document.querySelector(".a");
const b = document.querySelector(".b");

nums.forEach((num) => {
  num.addEventListener("click", (e) => {
    displayDom.displayResult(e.target.textContent);
  });
});
