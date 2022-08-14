const display = document.querySelector("#display");
let button1 = document.querySelector("#one");
let button2 = document.querySelector("#two");
let button3 = document.querySelector("#three");
let button4 = document.querySelector("#four");
let button5 = document.querySelector("#five");
let button6 = document.querySelector("#six");
let button7 = document.querySelector("#seven");
let button8 = document.querySelector("#eight");
let button9 = document.querySelector("#nine");
let button0 = document.querySelector("#zero");
let buttonCE = document.querySelector("#CE");
let buttonC = document.querySelector("#C");
let buttonAdd = document.querySelector("#add");
let buttonSubtract = document.querySelector("#sub");
let buttonMultiply = document.querySelector("#mul");
let buttonDivide = document.querySelector("#div");
let buttonEquals = document.querySelector("#equal");
let buttonPoint = document.querySelector("#dot");
let buttons = document.querySelector(".calculator");

const value1 = 0;
display.textContent = value1;
const value2 = 0;
display.textContent = value2;

const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return a / b;
}

const mod = function (a, b) {
    return a % b;
}

const operate = function(operator, a, b) {
    switch(operator) {
        case "+":
            add(a, b);
            break;
        case "-":
            subtract(a, b);
            break;
        case "*":
            multiply(a, b);
            break;
        case "/":
            divide(a, b);
            break;
        case "%":
            mod(a , b);
            break;
    }
}

buttons.addEventListener("click", () => console.log("Hi!"));