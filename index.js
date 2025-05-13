const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Add keyboard event listener to the document
document.addEventListener("keydown", function(event) {
    // Numbers 0-9
    if (/^\d$/.test(event.key)) {
        appendToDisplay(event.key);
    }
    // Operators +, -, *, /
    else if (['+', '-', '*', '/'].includes(event.key)) {
        appendToDisplay(event.key);
    }
    // Decimal point
    else if (event.key === '.') {
        appendToDisplay('.');
    }
    // Parentheses
    else if (event.key === '(' || event.key === ')') {
        appendToDisplay(event.key);
    }
    // Enter key for calculation
    else if (event.key === 'Enter') {
        calculate();
    }
    // Backspace for delete last character
    else if (event.key === 'Backspace') {
        deleteLast();
    }
    // Escape or Delete for clear
    else if (event.key === 'Escape' || event.key === 'Delete') {
        clearDisplay();
    }
});

// Focus the display input when the page loads
window.addEventListener('load', function() {
    if (display) {
        display.focus();
    }
});
