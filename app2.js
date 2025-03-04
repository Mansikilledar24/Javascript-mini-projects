// Updated app2.js
const inputField = document.getElementById("input");
const outputField = document.getElementById("output");
const buttonsContainer = document.querySelector(".btns-container");
const toggleBtn = document.getElementById("toggleBtn");

// Function to update input field
function updateInput(value) {
    const lastChar = inputField.value.slice(-1);
    if (["+", "-", "*", "/"].includes(lastChar) && ["+", "-", "*", "/"].includes(value)) {
        return;
    }
    inputField.value += value;
}

// Function to toggle calculator ON/OFF
function toggleCalculator() {
    if (toggleBtn.innerText === "ON") {
        toggleBtn.innerText = "OFF";
        toggleBtn.style.backgroundColor = "green";
        inputField.disabled = false;
    } else {
        toggleBtn.innerText = "ON";
        toggleBtn.style.backgroundColor = "red";
        inputField.disabled = true;
        clearInput();
    }
}

// Function to clear input
function clearInput() {
    inputField.value = "";
    outputField.innerText = "= ";
}

// Function to delete last character (Backspace)
function deleteLast() {
    inputField.value = inputField.value.slice(0, -1);
}

// Function to calculate the result
function calculateResult() {
    try {
        let result = eval(inputField.value);
        if (!isFinite(result)) {
            outputField.innerText = "= Error";
        } else {
            outputField.innerText = "= " + result;
        }
    } catch {
        outputField.innerText = "= Error";
    }
}

// Prevent manual typing in the input field
inputField.addEventListener("keydown", function (event) {
    event.preventDefault(); // Prevent all key inputs
});

// Event listener for ON/OFF button
toggleBtn.addEventListener("click", toggleCalculator);

// Event bubbling: Detect clicks on button container
buttonsContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("btn") && event.target !== toggleBtn) {
        let buttonValue = event.target.innerText;

        switch (buttonValue) {
            case "Ac":
                clearInput();
                break;
            case "<-":
                deleteLast();
                break;
            case "=":
                calculateResult();
                break;
            default:
                if (toggleBtn.innerText === "OFF") {
                    updateInput(buttonValue);
                }
        }
    }
});
