import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  const operateBtns = ['+', '-', 'X', '÷'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (operateBtns.includes(buttonName) && total && next) {
    total = operate(total, next, operation);
    next = null;
    operation = null;
  } else if (numbers.includes(buttonName)) {
    if (next) {
      next += buttonName;
    } else {
      next = buttonName;
    }
  }

  switch (buttonName) {
    case 'AC':
      total = '0';
      next = null;
      operation = null;
      break;

    case '%':
      if (next) {
        next /= 100;
      } else {
        total /= 100;
      }
      break;

    case '=':
      if (total && next && buttonName) {
        total = operate(total, next, buttonName);
        next = null;
        operation = null;
      }
      break;

    case '.':
      if (next && !next.includes('.')) {
        next += buttonName;
      } else {
        next = '0.';
      }
      break;

    case '+/-':
      if (next) {
        next *= -1;
      } else {
        total *= -1;
      }
      break;

    default:
      break;
  }

  return { total, next, operation };
};

export default calculate;
