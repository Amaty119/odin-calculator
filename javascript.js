const display = document.querySelector(".display");
const disV1 = document.querySelector("#one");
const disV2 = document.querySelector("#two");
const disV3 = document.querySelector(".three");
const opV = document.querySelector("#ops");
let allClear = document.querySelector("#ac");
const clear = document.querySelector("#c");

let buttons = document.querySelector(".calculator");

let numkey = document.querySelectorAll(".num-key");
let operator = document.querySelectorAll(".operator");
let equal = document.querySelector("#equal");
let dot = document.querySelector("#dot");



//value 1 is the input, value 2 is the output
let value1 = 0;
let value2 = 0;
let prevop;
let op = "?";
let init = 0;
let toggle = true;
let solve = 0;
let decimal = false;



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

allClear.addEventListener("click", () => {
    value1 = 0;
    value2 = 0;
    op = "?";
    init = 0;
    toggle = true;
    solve = 0;
    disV1.textContent = "";
    disV2.textContent = "";
    disV3.textContent = solve;
    opV.textContent = "";
    decimal = false;
});

clear.addEventListener("click", () => {
    value1 = Math.floor(parseInt(value1 / 10))
    disV3.textContent = value1;
});

//Add decimal point on click
dot.addEventListener("click", () =>{
    if(toggle && !decimal){
        value1 = value1 += ".";
           disV3.textContent = value1;
    } else {
        value2 = value2 += ".";
        disV3.textContent = value2;
    }
    decimal = true;
});

numkey.forEach(key => {
    key.addEventListener("click", function handleClick(event) {
        console.log(value1 + key.value);
        if(decimal){
            if(toggle) {
                value1 = Number(value1 + key.value);
                disV3.textContent = value1;
            } else {
                value2 = Number(value2 + key.value);
                disV3.textContent = value2;
            }
        } else{
            if(toggle) {
                value1 = parseInt(value1 * 10) + parseInt(key.value);
                if(parseInt(key.value) == 0) value1 * 10; 
                disV3.textContent = value1;
            } else {
                value2 = parseInt(value2 * 10) + parseInt(key.value);
                if(parseInt(key.value) == 0) value2 * 10; 
                disV3.textContent = value2;
            }
        }
                
    });
});

operator.forEach(key => {
    key.addEventListener("click", function handleClick(event) {
        prevop = key.value;
        disV2.textContent = "";
        if(value1 != 0)toggle = false;

        if(key.value != "=") {
            disV1.textContent = value1;
        }
        
        if(op != "?" && toggle != true) {
            console.log(op + ", " + value1 + ", " + value2);

            if(key.value == "=" && value2 != 0) {
                solve = operate(op, value1, value2);
                disV1.textContent = value1;
                disV2.textContent = value2 + " =";
                value1 = solve;
                value2 = 0;
            }
        }
        op = key.value;
        if(key.value != "=") opV.textContent = op;
        disV3.textContent = solve;
        decimal = false;
    });
});