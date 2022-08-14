const display = document.querySelector("#display");
let buttons = document.querySelector(".calculator");

let numkey = document.querySelectorAll(".num-key");
let operator = document.querySelectorAll(".operator");
let equal = document.querySelector("#equal");



let value1 = 0;
let value2 = 0;
let op;

display.textContent = value1 + ", " + value2;

const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return b - a;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return b / a;
}

const mod = function (a, b) {
    return a % b;
}

const operate = function(operator, a, b) {
    switch(operator) {
        case "+":
            return (add(a, b));
        case "-":
            return(subtract(a, b));
        case "*":
            return(multiply(a, b));
        case "/":
            return(divide(a, b));
        case "%":
            return(mod(a , b));
    }
}

numkey.forEach(key => {
    key.addEventListener("click", function handleClick(event) {
        value1 = parseInt(value1 * 10) + parseInt(key.value);
        if (parseInt(key.value) == 0) value1 * 10; 
        display.textContent = value1 + ", " + value2;
        console.log("hi")
    });
});
operator.forEach(key => {
    key.addEventListener("click", function handleClick(event) {
        if(value2 == 0) {
            value2 = value1;
        }
        if(key.value == "=") {
            value2 = operate(op, value1, value2);
        }
        value1 = 0;
        op = key.value;
        console.log(value1 + ", " + value2);
        display.textContent = value1 + ", " + value2;
    });
});