var currentInput = "";
var operator = "";
var previousInput = "";

function EnterNumber(num) {
    currentInput += num;
    document.getElementById("Answer").value = currentInput;
}

function EnterOperator(op) {
    if (currentInput === "") return;
    
    if (previousInput !== "" && operator !== "") {
        EnterEqual();
    }
    
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

function EnterEqual() {
    if (previousInput === "" || currentInput === "" || operator === "") return;
    
    var result;
    var prev = parseFloat(previousInput);
    var curr = parseFloat(currentInput);
    
    switch (operator) {
        case "+":
            result = prev + curr;
            break;
        case "-":
            result = prev - curr;
            break;
        case "*":
            result = prev * curr;
            break;
        case "/":
            if (curr === 0) {
                alert("Cannot divide by zero!");
                EnterClear();
                return;
            }
            result = prev / curr;
            break;
        default:
            return;
    }
    
    document.getElementById("Answer").value = result;
    currentInput = result.toString();
    previousInput = "";
    operator = "";
}

function EnterClear() {
    currentInput = "";
    operator = "";
    previousInput = "";
    document.getElementById("Answer").value = "";
}

