const addButton = document.querySelector(".add");
const currentNumber = document.querySelector(".current-number");
const subtractButton = document.querySelector(".subtract");

let counter = 0;

currentNumber.innerText = counter;

const add = function () {
  ++counter;
};

const subtract = function () {
  --counter;
};

const buttonCount = function (button, calculation) {
  button.addEventListener("click", function () {
    calculation();

    currentNumber.innerText = counter;

    if (counter >= 10 && counter < 20) {
      document.body.style.backgroundColor = "#F1E6FA";
    } else if (counter >= 20 && counter < 30) {
      document.body.style.backgroundColor = "#E6C8F1";
    } else if (counter >= 30 && counter < 40) {
      document.body.style.backgroundColor = "#D0A7E5";
    } else {
      document.body.style.backgroundColor = "#D8A7D8";
    }
  });
};

buttonCount(addButton, add);
buttonCount(subtractButton, subtract);
