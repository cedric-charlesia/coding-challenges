const submitPalindromeBtn = document
  .getElementById("submitPalindrome")
  .addEventListener("click", (event) => {
    event.preventDefault();

    const userInput = document.getElementById("palindrome").value;

    isPalindrome(userInput);
  });

const resetPalindromeBtn = document
  .getElementById("resetPalindrome")
  .addEventListener("click", function () {
    resetPalindrome();
  });

const resetPalindrome = () => {
  const getResult = document.querySelector(".display-result");
  const errorMessage = document.querySelector(".palindrome-error");

  errorMessage.textContent = "";

  if (getResult !== null) {
    getResult.remove();
  }
};

const isPalindrome = (userInput) => {
  // Reset result display
  resetPalindrome();

  // Make sure the the string is lowercase
  const lowerCaseStr = userInput.toLowerCase();

  // Remove special characters and spaces
  let parsedStr = lowerCaseStr
    .normalize("NFD")
    .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "")
    .replaceAll(" ", "");

  let j = 0;
  let palindrome = "";

  if (parsedStr.length >= 3) {
    for (let i = parsedStr.length - 1; i >= 0; i--) {
      if (parsedStr[0 + j] === parsedStr[i]) {
        palindrome += parsedStr[i];
      }
      j++;
    }

    // Append the result in the HTML result div
    const result = document.getElementById("result");
    const displayPalindrome = document.createElement("p");
    displayPalindrome.classList.add("display-result", "text-lg");

    if (parsedStr.length === palindrome.length) {
      displayPalindrome.classList.add("text-green-600");
      displayPalindrome.textContent = `"${userInput}" est un palindrome`;

      result.append(displayPalindrome);
    } else {
      displayPalindrome.classList.add("text-rose-600");
      displayPalindrome.textContent = `"${userInput}" n'est pas un palindrome`;
      result.append(displayPalindrome);
    }
  } else {
    const errorMessage = document.querySelector(".palindrome-error");
    errorMessage.textContent =
      "Veuillez saisir un mot ou une phrase de 3 lettres minimum";
  }
};

/** Mobile menu toggle **/
const navigationMenu = document.querySelector(".mobile-menu");

const toggleBtn = document
  .querySelector("button.mobile-menu-button")
  .addEventListener("click", function () {
    navigationMenu.classList.toggle("hidden");
  });
