const defaultStatus = {
  a: "",
  b: "",
  result: "0",
  currentOperator: "",
};
let currentStatus = { ...defaultStatus };

const resetStatus = () => {
  currentStatus = { ...defaultStatus };
};
const getCurrentStatus = () => currentStatus;
const getOperator = () => currentStatus.currentOperator;
const getResult = () => currentStatus.result;

const updateA = (a) => {
  currentStatus.a += a;
};
const updateB = (b) => {
  currentStatus.b += b;
};
const resetA = (a) => {
  currentStatus.a = a;
};
const resetB = (b) => {
  currentStatus.b = b;
};
const updateOperator = (operator) => {
  currentStatus.currentOperator = operator;
};
const updateResult = (result) => {
  currentStatus.result = result;
};

const getA = () => currentStatus.a;
const getB = () => currentStatus.b;

export {
  resetStatus,
  getCurrentStatus,
  updateA,
  updateB,
  resetA,
  resetB,
  updateOperator,
  updateResult,
  getA,
  getB,
  getOperator,
  getResult,
};
