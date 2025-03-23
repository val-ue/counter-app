const addButton = document.querySelector(".add");
const currentNumber = document.querySelector(".current-number");
const subtractButton = document.querySelector(".subtract");
const saveButton = document.querySelector(".save");
const resetButton = document.querySelector(".reset");
const savedNumbers = document.querySelector(".saved-numbers");

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

    if (counter < 0) {
      document.body.style.backgroundColor = "#F1E6FA";
    } else if (counter >= 5 && counter < 10) {
      document.body.style.backgroundColor = "#E6C8F1";
    } else if (counter >= 10 && counter < 20) {
      document.body.style.backgroundColor = "#D0A7E5";
    } else {
      document.body.style.backgroundColor = "#D8A7D8";
    }
  });
};

buttonCount(addButton, add);
buttonCount(subtractButton, subtract);

saveButton.addEventListener("click", function () {
  savedNumbers.innerText += ` ${currentNumber.innerText}`;
});

resetButton.addEventListener("click", function () {
  savedNumbers.innerText = ``;
});
