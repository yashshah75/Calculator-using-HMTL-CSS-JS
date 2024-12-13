let displayValue = "";
let memoryValue = 0;

function clearDisplay() {
    displayValue = "";
    updateDisplay("0");
}

function appendNumber(number) {
    displayValue += number;
    updateDisplay(displayValue);
}

function appendOperator(operator) {
    if (displayValue.length > 0 && !isNaN(displayValue[displayValue.length - 1])) {
        displayValue += operator;
    }
    updateDisplay(displayValue);
}

function backspace() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay(displayValue || "0");
}

function calculateSquareRoot() {
    try {
        const result = Math.sqrt(eval(displayValue));
        updateDisplay(result);
        displayValue = result.toString();
    } catch {
        handleError();
    }
}

function calculateResult() {
    try {
        const sanitizedExpression = sanitizeExpression(displayValue);
        const result = eval(sanitizedExpression);
        updateDisplay(result);
        displayValue = result.toString();
    } catch {
        handleError();
    }
}

function sanitizeExpression(expression) {
    return expression.replace('%', '/100'); // It Will help to Convert percentage to division by 100
}

function handleError() {
    updateDisplay("Error");
    displayValue = "";
}

function updateDisplay(value) {
    document.getElementById("display").innerText = value;
}

// Memory Functions
function memoryAdd() {
    try {
        memoryValue += eval(displayValue || "0");
    } catch {
        memoryValue += 0;
    }
    alert(`Memory: ${memoryValue}`);
}

function memorySubtract() {
    try {
        memoryValue -= eval(displayValue || "0");
    } catch {
        memoryValue -= 0;
    }
    alert(`Memory: ${memoryValue}`);
}

function memoryRecall() {
    displayValue = memoryValue.toString();
    updateDisplay(displayValue);
}

function memoryClear() {
    memoryValue = 0;
    alert("Memory Cleared");
}
