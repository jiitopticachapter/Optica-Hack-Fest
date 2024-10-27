function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value);
        if (result === Infinity || result === -Infinity) {
            throw new Error("Division by zero");
        }
        addToHistory(display.value, result);
        display.value = result;
    } catch (error) {
        alert(error.message);
        clearDisplay();
    }
}

function toggleNightMode() {
    document.body.classList.toggle('night-mode');
}

function addToHistory(expression, result) {
    const historyList = document.getElementById('history-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${expression} = ${result}`;
    historyList.appendChild(listItem);
}

function clearHistory() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
}
