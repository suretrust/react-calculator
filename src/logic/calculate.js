const calculate = ({ data, buttonName }) => {
  if (data.operation == "-") {
    data.total = Big(data.total).minus(Big(data.next));
  } else if (data.operation == "+") {
    data.total = Big(data.total).plus(Big(data.next));
  } else if (data.operation == '+/-') {
    data.total = Big(data.total).times(Big(-1));
  } else if (data.operation == 'X') {
    data.total = Big(data.total).times(Big(data.next));
  } else if (data.operation == '÷') {
    data.total = Big(data.total).div(Big(data.next));
  }
  return data;
};
