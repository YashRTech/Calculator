import "./styles/style.css";
import "./styles/footer.css";
import {
  handleKeyboardInput,
  handleEqual,
  handleNums,
  handleOperators,
  clear,
  backspace,
  appendPoint,
} from "./modules/functions.js";

const nums = document.querySelectorAll("[data-num]");
const operators = document.querySelectorAll("[data-operator]");
const dataPoint = document.querySelector("[data-point]");
const dataEqual = document.querySelector("[data-equal]");
const btnDelete = document.querySelector(".btn-delete");
const btnClear = document.querySelector(".btn-clear");

window.addEventListener("keydown", (e) => {
  handleKeyboardInput(e);
});

dataPoint.addEventListener("click", appendPoint);

nums.forEach((num) => {
  num.addEventListener("click", () => {
    handleNums(num.textContent);
  });
});

operators.forEach((op) => {
  op.addEventListener("click", () => {
    handleOperators(op.textContent);
  });
});

dataEqual.addEventListener("click", handleEqual);

btnDelete.addEventListener("click", backspace);

btnClear.addEventListener("click", clear);