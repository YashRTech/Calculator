import * as Calculator from "./calculate.js";
import * as Status from "./Status.js";
import * as displayDom from "./dom.js";

function handleKeyboardInput(e) {
  if (e.keyCode === 32) return;
  if (e.key >= 0 && e.key <= 9) handleNums(e.key);
  if (e.key === ".") appendPoint();
  if (e.key === "=" || e.key === "Enter") handleEqual();
  if (e.key === "Backspace") backspace();
  if (e.key === "Escape") clear();

  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/")
    handleOperators(e.key);
}

function appendPoint() {
  let a = Status.getA();
  let b = Status.getB();
  let operator = Status.getOperator();

  if (displayDom.getExpression().includes("=")) {
    Status.resetA(Status.getResult());
    displayDom.displayResult(Status.getA());
  }

  if (operator === "" && !a.includes(".")) {
    if (a === "") {
      Status.updateA("0.");
      displayDom.displayResult(Status.getA());
      return;
    }
    Status.updateA(".");
    displayDom.displayResult(Status.getA());
  } else if (!b.includes(".") && a) {
    if (b === "") {
      Status.updateB("0.");
      displayDom.displayResult(Status.getB());
      return;
    }
    Status.updateB(".");
    displayDom.displayResult(Status.getB());
  }
}

const handleNums = (val) => {
  let a = Status.getA();
  let b = Status.getB();

  if (a === "0") {
    Status.resetA(val);
    displayDom.displayResult(val);

    return;
  }
  if (b === "0") {
    Status.resetB(val);
    displayDom.displayResult(val);

    return;
  }

  if (displayDom.getExpression().includes("=") && Status.getResult() !== "0") {
    Status.resetStatus();
  }

  if (Status.getResult() === "0") {
    Status.updateA(val);
    displayDom.displayResult(Status.getA());
  } else {
    Status.updateB(val);
    displayDom.displayPrevResult(Status.getA());
    displayDom.displayResult(Status.getB());
  }
};

const handleOperators = (operator) => {
  let a = Status.getA();
  let b = Status.getB();
  if (a === "" && b === "") {
    Status.resetA(Status.getResult());
    Status.updateOperator(operator);
    displayDom.displayCurrentStatus();
    return;
  }

  if (a !== "" && b !== "") {
    let currentOperator = Status.getOperator();
    let result = Calculator.calculate(a, b, currentOperator);
    Status.updateResult(result);
    Status.resetA(result);
    Status.resetB("");
    Status.updateOperator(operator);
    displayDom.displayCurrentStatus();
  } else {
    Status.updateResult(a);
    Status.updateOperator(operator);
    Status.resetB("");
    displayDom.displayCurrentStatus();
  }
};

function handleEqual() {
  let a = Status.getA();
  let b = Status.getB();
  if (a === "" || b === "") return;
  let result = Calculator.calculate(
    Status.getA(),
    Status.getB(),
    Status.getOperator()
  );
  Status.updateResult(result);
  displayDom.displayExpression();
}

function backspace() {
  let a = Status.getA();
  let b = Status.getB();
  let operator = Status.getOperator();

  if (displayDom.getExpression().includes("=") && Status.getResult() !== "0") {
    clear();
    return;
  }
  if (operator === "") {
    let newA = a.slice(0, -1);
    Status.resetA(newA);
    displayDom.displayResult(newA);
  } else {
    let newB = b.slice(0, -1);
    Status.resetB(newB);
    displayDom.displayResult(newB);
  }
}

function clear() {
  Status.resetStatus();
  displayDom.displayCurrentStatus();
}

export {
  handleKeyboardInput,
  handleEqual,
  handleNums,
  handleOperators,
  clear,
  backspace,
  appendPoint,
};
