const display = document.querySelector(".display");
const disV1 = document.querySelector("#one");
const disV2 = document.querySelector("#two");
const opV = document.querySelector("#ops");

let buttons = document.querySelector(".calculator");

let numkey = document.querySelectorAll(".num-key");
let operator = document.querySelectorAll(".operator");
let equal = document.querySelector("#equal");
let solution = document.querySelector(".solution");


//value 1 is the input, value 2 is the output
let value1 = 0;
let value2 = 0;
let op = "";
let init = 0;
let toggle = true;
let solve = 0;

disV1.textContent = value1;
disV2.textContent = value2;

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
            return (add(a, b));
        case "-":
            return(subtract(a, b));
        case "×":
            return(multiply(a, b));
        case "÷":
            return(divide(a, b));
        case "%":
            return(mod(a , b));
    }
}

numkey.forEach(key => {
    key.addEventListener("click", function handleClick(event) {
            if(toggle) {
                value1 = parseInt(value1 * 10) + parseInt(key.value);
                if(parseInt(key.value) == 0) value1 * 10; 
            } else {
                value2 = parseInt(value2 * 10) + parseInt(key.value);
                if(parseInt(key.value) == 0) value2 * 10; 
            }
            
        disV1.textContent = value1;
        disV2.textContent = value2;
        console.log(value1 + ", " + value2);
    });
});

operator.forEach(key => {
    key.addEventListener("click", function handleClick(event) {

        toggle = false;

        console.log(op + ", " + value1 + ", " + value2);
        if(key.value == "=") {
            solve = operate(op, value1, value2);
            disV1.textContent = value1;
            disV2.textContent = value2;
            value1 = solve;
            value2 = 0;
        }
        op = key.value;
        disV1.textContent = value1;
            disV2.textContent = value2;
        

        solution.textContent = solve;
        if(key.value != "=") opV.textContent = op;
    });
});