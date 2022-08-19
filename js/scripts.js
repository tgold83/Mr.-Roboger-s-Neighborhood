// Business Logic

function inputNum(number) {
  let inputNumber = [];
  for (let i = 0; i <= number; i +=1) {
    let translate = convertNum(i);
    inputNumber.push(translate);
  }
  return inputNumber;
}

function convertNum(number) {
  let numString = number.toString();
  return numString;
}