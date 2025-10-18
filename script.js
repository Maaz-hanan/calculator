let allButtons = document.querySelector(".allButtons");
let num1 = "";
let num2 = "";
let operator = "";
isNum2 = false; // this will be true if we try to input our second number, hence this will make it easier to know when the first number is ending.

// creating a div for symbols
let symbolDiv = document.createElement("div");
allButtons.appendChild(symbolDiv);
symbolDiv.style.maxWidth = "150px";

// this is for percentage
let buttonAc = document.createElement("button");
buttonAc.textContent = "AC";
buttonAc.classList.add("buttonCss");
symbolDiv.appendChild(buttonAc)

// this is the clear button
let buttonDel = document.createElement("button");
buttonDel.textContent = "DEL"
buttonDel.classList.add("buttonCss");
symbolDiv.appendChild(buttonDel);

// this button is for addition button
let buttonAdd = document.createElement("button");
buttonAdd.textContent = "+";
buttonAdd.classList.add("buttonCss");
symbolDiv.appendChild(buttonAdd);

// this button is for subtraction
let buttonSub = document.createElement("button");
buttonSub.textContent = "-";
buttonSub.classList.add("buttonCss");
symbolDiv.appendChild(buttonSub)

// this button is for multiplication
let buttonMult = document.createElement("button");
buttonMult.textContent = "*";
buttonMult.classList.add("buttonCss");
symbolDiv.appendChild(buttonMult);

// this button is for division
let buttonDiv = document.createElement("button");
buttonDiv.textContent = "/";
buttonDiv.classList.add("buttonCss");
symbolDiv.appendChild(buttonDiv);


// creating a new div for numbers
let newDiv = document.createElement("div");
newDiv.style.maxWidth = "150px"
allButtons.appendChild(newDiv)

// creating number buttons using for loop
for (let i = 9; i >= 0; i--){
    let btn = document.createElement("button");
    btn.textContent = i;
    btn.classList.add("buttonCss");
    newDiv.appendChild(btn);
}

// creating the clear button
let buttonClear = document.createElement("button");
buttonClear.textContent = "=";
buttonClear.classList.add("buttonCss");
buttonClear.style.width = "100px";

newDiv.appendChild(buttonClear)

// creating element for display
let display = document.getElementById("display");


// creating functions for operations

function addition(a, b){
    return a + b;
}

function subtraction(a,b){
    return a - b;
}
function multiplication(a,b){
    return a * b;    
}
function division(a,b){
    if (b === 0){
        return "math error"
    }
    return a / b;
}

function operate(num1,num2,symbol){
    let a = num1;
    let b = num2;
    let char = symbol;

    switch(char){
        case "+":
            return addition(a,b);
            
        case "-":
            return subtraction(a,b);
            
        case "*":
           return multiplication(a,b);
            
        case "/":
            return division(a,b);
        default:
            return "invalid input";
    }

}

let buttons = document.querySelectorAll(".buttonCss");
// buttons.addEventListener("mouseover", () =>{
//     buttons.style.backgroundColor = "grey";

// })
// buttons.addEventListener("mouseout", () => {
//     buttons.style.backgroundColor = "white";
// })

buttons.forEach(buttons => {
    buttons.addEventListener("click", () => {
        const value = buttons.textContent;

        if (value === "AC"){
            display.value = "";
            num1 = "";
            num2 = "";
            operator = "";
            isNum2 = false;
            
        }
        else if (value === "DEL"){
            display.value = display.value.slice(0, -1);

            if (isNum2) {
                num2 = num2.slice(0, -1);
            }
            else {
                num1 = num1.slice(0, -1);
            }
        }
        else if (["+", "-", "*", "/"].includes(value)){
            
            operator = value;
            isNum2 = true;
            display.value += value;
        }
        else if (value === "="){
            let result = operate(Number(num1),Number(num2),operator);
            display.value = result;
            num1 = result;
            operator = "";
            num2 = "";
            isNum2 = false;

        }
        else{
            display.value += value;
            if (!isNum2){
                num1 += value; 
            }
            else{
                num2 += value;
            }
        }
    });
})

