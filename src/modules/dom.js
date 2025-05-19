import * as Status from "./Status.js"

const result = document.querySelector(".result");
const prevResult = document.querySelector(".previousResult");

const displayResult = (res) => {
  result.textContent = res;
};
const displayPrevResult = (res) => {
  prevResult.textContent = res + " " + Status.getOperator();
};

const displayCurrentStatus = () => {
  result.textContent = Status.getResult();
  displayPrevResult(Status.getA());
};
const displayExpression = () => {
  result.textContent = Status.getResult();
  prevResult.textContent =
    Status.getA() + " " + Status.getOperator() + " " + Status.getB() + " =";
};
const getExpression = () => prevResult.textContent;

export {
  displayResult,
  displayCurrentStatus,
  displayPrevResult,
  displayExpression,
  getExpression,
};
