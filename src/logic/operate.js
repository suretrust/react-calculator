import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  if (numberTwo === undefined) return numberOne;
  if (numberOne === undefined) return numberTwo;

  try {
    Big.DP = 10;
    const x = Big(numberOne);
    const y = Big(numberTwo);

    switch (operation) {
      case '-':
        return x.minus(y).toString();
      case '+':
        return x.plus(y).toString();
      case 'X':
        return x.times(y).toString();
      case '÷':
        return x.div(y).toString();
      default:
        return null;
    }
  } catch (err) {
    return err.message.slice(9);
  }
};

export default operate;
