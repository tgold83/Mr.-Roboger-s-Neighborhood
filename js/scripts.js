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
  if (numString.includes("3")) {
    return "Won't you be my neighbor?"
  } else if (numString.includes("2")) {
    return "Boop!"
  } else if (numString.includes("1")) {
    return "Beep!"
  } else {
    return numString;
  }
}

// UI Logic

window.onload = function() {
  document.querySelector("form").onsubmit = inputNum(number);
  inputNum.preventDefault();
}

// function hideResults(onsubmit) {
//   document.getElementById("inputNum").setAttribute("class", "hidden");
// }

// window.onload = function() {
//   hideResults();
//   document.querySelector("form").onsubmit = function(inputNum) {
//     inputNum.preventDefault();
//     hideResults();
//   }
// }