import Big from "./big.mjs";

const operate = (numberOne, numberTwo, operation) => {
  numberOne = Big(numberOne);
  numberTwo = Big(numberTwo);

  if (operation === "-") {
    return numberOne.minus(numberTwo);
  } else if (operation === "÷") {
    return numberOne.div(numberTwo);
  } else if (operation === "+") {
    return numberOne.plus(numberTwo);
  } else if (operation === "X") {
    return numberOne.times(numberTwo);
  } else if (operation === "%") {
    return numberOne.mod(numberTwo);
  }
};
