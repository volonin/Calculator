let left = document.querySelectorAll(".number");
let output = document.querySelector(".output");
output = output.firstElementChild;
for (i of left){
    i.addEventListener("click", outputNumber)
}
function outputNumber (){
    let res = this.firstElementChild.innerHTML;
    if (res === "."){
        output.lastElementChild.innerHTML += res;
    }else{
        output.lastElementChild.innerHTML += Number(res);
    }

}
let deleted = document.querySelectorAll(".del");
let ac = deleted[0];
let del = deleted[1]
deleted = delete deleted[0];
ac.addEventListener("click", function (){
    output.lastElementChild.innerHTML = "";
    output.firstElementChild.innerHTML = "";
    completed = false;
    value1 = 0;
    value2 = 0;
})
del.addEventListener("click", function () {
    output.firstElementChild.innerHTML = "";
    completed = false;
})

let symbol = document.querySelectorAll(".symbol");
let mult = symbol[1];
let takingAway = symbol[2];
let add = symbol[3];
let equals = symbol[4];
let divide = symbol[0];
let value1 = 0;
let value2 = 0;
let value3 = 0;
let completed = false;
symbol = "";
takingAway.addEventListener("click", multFunction);
mult.addEventListener("click",multFunction);
add.addEventListener("click",multFunction);
divide.addEventListener("click",multFunction);

function multFunction () {
    symbol = this.firstElementChild.firstElementChild.innerHTML;
    value1 = Number(output.lastElementChild.innerHTML);
    output.firstElementChild.innerHTML = `${output.lastElementChild.innerHTML}${symbol}`;
    output.lastElementChild.innerHTML = "";
}

equals.addEventListener("click", function equalsFunction () {
    if (completed !== true){
        value2 = Number(output.lastElementChild.innerHTML);
        output.firstElementChild.innerHTML += value2;
        switch (String(symbol)){
            case "+":output.lastElementChild.innerHTML = `${value1 + value2}`;
                break;
            case "/": value3 = value1 / value2;
                output.lastElementChild.innerHTML = `${value3.toFixed(5)}`;
                break;
            case "*": output.lastElementChild.innerHTML = `${value1 * value2}`;
                break;
            case "-": output.lastElementChild.innerHTML = `${value1 - value2}`;
                break;
        }
        completed = true;
    }else{
        value1 = Number(output.lastElementChild.innerHTML);
        switch (String(symbol)){
            case "+":output.lastElementChild.innerHTML = `${value1 + value2}`;
                break;
            case "/":value3 = value1 / value2;
                output.lastElementChild.innerHTML = `${value3.toFixed(5)}`;
                break;
            case "*": output.lastElementChild.innerHTML = `${value1 * value2}`;
                break;
            case "-": output.lastElementChild.innerHTML = `${value1 - value2}`;
                break;
        }
        output.firstElementChild.innerHTML = `${value1}+${value2}`;
    }
})
