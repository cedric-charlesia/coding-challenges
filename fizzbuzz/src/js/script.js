const submitFizzBuzz = document
  .getElementById("submitFizzBuzz")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const maxNumber = parseInt(document.getElementById("maxNumber").value);
    const fizzNumber = parseInt(document.getElementById("fizzNumber").value);
    const buzzNumber = parseInt(document.getElementById("buzzNumber").value);

    if (checkUserInput(maxNumber, fizzNumber, buzzNumber)) {
      playFizzBuzz(maxNumber, fizzNumber, buzzNumber);

      /* Scroll to result*/
      const pageHeight = window.innerHeight;
      window.scrollTo({
        top: pageHeight / 2,
        left: 100,
        behavior: "smooth",
      });
    }
  });

const resetButton = document
  .getElementById("resetFizzBuzz")
  .addEventListener("click", function () {
    resetFizzBuzz();
  });

function resetFizzBuzz() {
  const normalNumberClass = document.querySelectorAll(".normal-number");
  const fizzNumberClass = document.querySelectorAll(".fizz");
  const buzzNumberClass = document.querySelectorAll(".buzz");
  const fizzBuzzNumberClass = document.querySelectorAll(".fizzbuzz");
  const errorMessage = document.querySelectorAll(".max-number-error");

  errorMessage.forEach(function (message) {
    message.textContent = "";
  });

  normalNumberClass.forEach(function (number) {
    number.remove();
  });
  fizzNumberClass.forEach(function (fizzNumber) {
    fizzNumber.remove();
  });
  buzzNumberClass.forEach(function (buzzNumber) {
    buzzNumber.remove();
  });
  fizzBuzzNumberClass.forEach(function (fizzBuzzNumber) {
    fizzBuzzNumber.remove();
  });
}

function checkUserInput(maxNumber, fizzNumber, buzzNumber) {
  const maxNumberError = document.querySelector(".max-number-error");
  const fizzNumberError = document.querySelector(".fizz-number-error");
  const buzzNumberError = document.querySelector(".buzz-number-error");

  if (isNaN(maxNumber) || maxNumber < 1 || maxNumber === "") {
    maxNumberError.textContent =
      "Veuillez entrer un nombre entier supérieur à 0";
    return false;
  } else {
    maxNumberError.textContent = "";
  }

  if (isNaN(fizzNumber) || fizzNumber < 1 || fizzNumber === "") {
    fizzNumberError.textContent =
      "Veuillez entrer un nombre entier supérieur à 0";
    return false;
  } else {
    fizzNumberError.textContent = "";
  }

  if (isNaN(buzzNumber) || buzzNumber < 1 || buzzNumber === "") {
    buzzNumberError.textContent =
      "Veuillez entrer un nombre entier supérieur à 0";
    return false;
  } else {
    buzzNumberError.textContent = "";
  }

  return true;
}

function playFizzBuzz(maxNumber, fizzNumber, buzzNumber) {
  resetFizzBuzz();

  const result = document.getElementById("result");

  if (maxNumber != "" && fizzNumber != "" && buzzNumber != "") {
    for (let i = 1; i <= maxNumber; i++) {
      if (i % fizzNumber === 0 && i % buzzNumber === 0) {
        const displayFizzBuzz = document.createElement("p");
        displayFizzBuzz.classList.add(
          "fizzbuzz",
          "bg-gray-100",
          "px-3",
          "py-3",
          "text-orange-400"
        );
        displayFizzBuzz.textContent = "FizzBuzz";
        result.append(displayFizzBuzz);
      } else if (i % buzzNumber === 0) {
        const displayBuzz = document.createElement("p");
        displayBuzz.classList.add(
          "buzz",
          "bg-gray-100",
          "px-3",
          "py-3",
          "text-rose-700"
        );
        displayBuzz.textContent = "Buzz";
        result.append(displayBuzz);
      } else if (i % fizzNumber === 0) {
        const displayFizz = document.createElement("p");
        displayFizz.textContent = "Fizz";
        displayFizz.classList.add(
          "fizz",
          "bg-gray-100",
          "px-3",
          "py-3",
          "text-sky-700"
        );
        result.append(displayFizz);
      } else {
        const displayNumber = document.createElement("p");
        displayNumber.classList.add(
          "normal-number",
          "bg-gray-100",
          "px-3",
          "py-3",
          "text-neutral-700"
        );
        displayNumber.textContent = i;
        result.append(displayNumber);
      }
    }
  }
}

/** Mobile menu toggle **/
const navigationMenu = document.querySelector(".mobile-menu");

const toggleBtn = document
  .querySelector("button.mobile-menu-button")
  .addEventListener("click", function () {
    navigationMenu.classList.toggle("hidden");
  });
