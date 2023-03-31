const submitFibonacciBtn = document
    .getElementById("submitFibonacci")
    .addEventListener("click", (event) => {
        event.preventDefault();

        const maxNumber = document.getElementById("fibonacci-max-number").value;

        if (isValid(maxNumber)) {
            findFibonacciEvenNumbersSum(fibonacci(maxNumber))
        }
    });

const resetFibonacciBtn = document
  .getElementById("resetFibonacci")
  .addEventListener("click", () => {
    resetFibonacci();
  });

const resetFibonacci = () => {
    const fibonacciClass = document.querySelector(".fibonacci");
    const evenClass = document.querySelector(".even");
    const sumClass = document.querySelector(".sum");
    const errorMessage = document.querySelector(".max-number-error");

    errorMessage.textContent = "";

    if (fibonacciClass !== null) {
        fibonacciClass.remove();
    }

    if (evenClass !== null) {
        evenClass.remove();
    }

    if (sumClass !== null) {
        sumClass.remove();
    }
}

const isValid = (maxNumber) => {
    const maxNumberError = document.querySelector(".max-number-error");

    if (isNaN(maxNumber) || maxNumber < 1 || maxNumber === "") {
        maxNumberError.textContent =
            "Veuillez entrer un nombre entier entre 0 et 1000";
        return false;
    } else {
        maxNumberError.textContent = "";
    }

    if (maxNumber > 50) {
        maxNumberError.textContent =
            "Au-delà de 50, on considère que le résultat est vraiment trop grand !";
        return false;
    } else {
        maxNumberError.textContent = "";
    }
    return true;
}

const fibonacci = (number) => {
    if (number <= 2) return [1, 2]

    else {
        let fibonacciNumbers = fibonacci(number - 1)
        fibonacciNumbers.push(fibonacciNumbers[fibonacciNumbers.length - 1] + fibonacciNumbers[fibonacciNumbers.length - 2]);
        return fibonacciNumbers;
    }
}

const findFibonacciEvenNumbersSum = (fibonacciNumbers) => {
    resetFibonacci()

    let evenNumbers = []
    let evenNumbersSum = 0

    for (let number of fibonacciNumbers) {
        if (number % 2 === 0) {
            evenNumbers.push(number)
            evenNumbersSum += number
        }
    }

    const result = document.getElementById("result");

    // Append the current Fibonacci numbers
    const displayResultTermsDiv = document.createElement("div")
    displayResultTermsDiv.classList.add("fibonacci", "flex", "flex-col", "mb-4", "w-full", "md:w-80", "m-auto", "border-4", "border-cyan-500", "justify-center", "px-3", "py-3", "gap-2", "rounded")

    const displayResultTermsHeading = document.createElement("h3");
    displayResultTermsHeading.classList.add("font-bold", "text-center")
    displayResultTermsHeading.textContent = "Les termes pour cette suite sont :"

    const displayResultTermsContent = document.createElement("p")
    displayResultTermsContent.classList.add("text-center")
    displayResultTermsContent.textContent = `${[...fibonacciNumbers].toLocaleString().toString().replaceAll(",", " ; ")}`
    displayResultTermsDiv.append(displayResultTermsHeading, displayResultTermsContent)

    result.append(displayResultTermsDiv)

    // Append even numbers for the current Fibonacci numbers
    const displayFibonacciEvenNumbersDiv = document.createElement("div");
    displayFibonacciEvenNumbersDiv.classList.add("even", "flex", "flex-col", "mb-4", "w-full", "md:w-80", "m-auto", "border-4", "border-cyan-500", "justify-center", "px-3", "py-3", "gap-2", "rounded")

    const displayFibonacciEvenNumbersHeading = document.createElement("h3")
    displayFibonacciEvenNumbersHeading.classList.add("font-bold", "text-center")
    displayFibonacciEvenNumbersHeading.textContent = "Les nombres pairs de cette suite sont :"

    const displayFibonacciEvenNumbersContent = document.createElement("p")
    displayFibonacciEvenNumbersContent.classList.add("text-center")
    displayFibonacciEvenNumbersContent.textContent = `${[...evenNumbers].toLocaleString().toString().replaceAll(",", " ; ")}`

    displayFibonacciEvenNumbersDiv.append(displayFibonacciEvenNumbersHeading, displayFibonacciEvenNumbersContent)

    result.append(displayFibonacciEvenNumbersDiv)

    // Append even numbers sum
    const displayFibonacciEvenNumbersSumDiv = document.createElement("div");
    displayFibonacciEvenNumbersSumDiv.classList.add("sum", "flex", "flex-col", "mb-4", "w-full", "md:w-80", "m-auto", "border-4", "border-cyan-500", "justify-center", "px-3", "py-3", "gap-2", "rounded")

    const displayFibonacciEvenNumbersSumHeading = document.createElement("h3")
    displayFibonacciEvenNumbersSumHeading.classList.add("font-bold", "text-center")
    displayFibonacciEvenNumbersSumHeading.textContent = "La somme de ces nombres est :"

    const displayFibonacciEvenNumbersSumContent = document.createElement("p")
    displayFibonacciEvenNumbersSumContent.classList.add("font-bold", "text-lg", "text-cyan-600", "text-center")
    displayFibonacciEvenNumbersSumContent.textContent = `${evenNumbersSum.toLocaleString()}`

    displayFibonacciEvenNumbersSumDiv.append(displayFibonacciEvenNumbersSumHeading, displayFibonacciEvenNumbersSumContent)

    result.append(displayFibonacciEvenNumbersSumDiv)

    return evenNumbersSum
}