import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation, calcProcess } = data;
  const operateBtns = ['+', '-', 'X', '÷'];
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (operation === '%' && !total) {
    total = undefined;
    next = undefined;
    operation = null;
    calcProcess = undefined;
  }

  if (operateBtns.includes(buttonName)) {
    if (next && !total) total = operate(total, next, operation);
    if (total) {
      operation = buttonName;
      calcProcess = `${total} ${operation || ''} `;
    }
    next = undefined;
  } else if (numbers.includes(buttonName)) {
    if (next === '0') {
      next = buttonName;
      calcProcess = buttonName;
    } else if (next && next !== '0') {
      next += buttonName;
      calcProcess += buttonName;
    } else if (!next) {
      next = buttonName;
      calcProcess = buttonName;
    }
    if (total && next) {
      calcProcess = `${total} ${operation} ${next}`;
      total = operate(total, next, operation);
    }
  }

  switch (buttonName) {
    case 'AC':
      total = undefined;
      next = undefined;
      operation = null;
      calcProcess = undefined;
      break;

    case '%':
      operation = buttonName;
      if (next && total) {
        calcProcess = `${total}% =`;
        total /= 100;
        next = '';
      } else if (next && !total) {
        calcProcess = `${next}% =`;
        next /= 100;
      } else if (total && !next) {
        calcProcess = `${total}% =`;
        total /= 100;
      }
      break;

    case '=':
      if (total && next) {
        calcProcess += ' =';
        next = undefined;
        operation = undefined;
      }
      break;

    case '.':
      if (next && !next.includes('.')) {
        next += buttonName;
        calcProcess += buttonName;
      } else if (!next) {
        next = '0.';
        calcProcess = '0.';
      }
      break;

    case '0':
      if (next && next !== '0') {
        next += buttonName;
        calcProcess += buttonName;
      } else if (!next) {
        next = buttonName;
        calcProcess = buttonName;
      }
      if (total && next) calcProcess = `${total} ${operation} ${next}`;
      if (total && next && next !== '0') {
        total = operate(total, next, operation);
      }
      break;

    case '+/-':
      if (next === '0' || total === '0') break;
      if (next && !total) {
        calcProcess = `-(${next}) =`;
        next *= -1;
      } else if (total) {
        calcProcess = `-(${total}) =`;
        total *= -1;
      }
      break;

    default:
      break;
  }
  if (total || next) {
    if (next) next = next.toString();
    if (total) total = total.toString();
  }

  return { total, next, operation, calcProcess };
};

export default calculate;
