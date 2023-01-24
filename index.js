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
let ac;
let del;
let deleted = document.querySelectorAll(".del");
for (i of deleted){
    if (i.firstElementChild.innerHTML === "Ac"){
        ac = i;
    }else{
        del = i;
    }
}
ac.addEventListener("click", function (){
    output.lastElementChild.innerHTML = "";
    output.firstElementChild.innerHTML = "";
    completed = false;
    value1 = 0;
    value2 = 0;
    stage = false;
})
del.addEventListener("click", function () {
    output.firstElementChild.innerHTML = "";
    completed = false;
    stage = false;
})

let symbol = document.querySelectorAll(".symbol");
let mult, takingAway, add, equals, divide;
for (i of symbol){
    switch (i.firstElementChild.firstElementChild.innerHTML){
        case "+": add = i;
            break;
        case "/": divide = i;
            break;
        case "*":  mult = i;
            break;
        case "-":  takingAway = i;
            break;
        case "=": equals = i;
        break;
    }
}
let value1 = 0;
let value2 = 0;
let value3 = 0;
let x = 1;
let completed = false;
let stage = false;
symbol = "";
takingAway.addEventListener("click", multFunction);
mult.addEventListener("click",multFunction);
add.addEventListener("click",multFunction);
divide.addEventListener("click",multFunction);

function multFunction () {
    symbol = this.firstElementChild.firstElementChild.innerHTML;
    if (!stage){
        value1 = Number(output.lastElementChild.innerHTML);
        value3 = value1;
        output.firstElementChild.innerHTML = `${output.lastElementChild.innerHTML}${symbol}`;
        output.lastElementChild.innerHTML = "";
        if (x > 0){
            stage = true;
        }
        x++;
    }else{
        value2 = Number(output.lastElementChild.innerHTML);
        value3 = output.firstElementChild.innerHTML;
        value3 = Number(value3.replace(/[^0-9]/g, '')); // через цикл до того как не наткнется на символ.
        switch (String(symbol)){
            case "+":output.firstElementChild.innerHTML = `${value3 + value2}${symbol}`;
                break;
            case "/":output.firstElementChild.innerHTML = `${value3 / value2}${symbol}`;
                break;
            case "*": output.firstElementChild.innerHTML = `${value3 * value2}${symbol}`;
                break;
            case "-": output.firstElementChild.innerHTML = `${value3 - value2}${symbol}`;
                break;
        }
        output.lastElementChild.innerHTML = "";
    }
}

equals.addEventListener("click", function equalsFunction () {
    if (stage){
        value1 = output.firstElementChild.innerHTML;
        symbol = String(value1.replace(/[0-9]/g, ''));
        value1 = Number(value1.replace(/[^0-9]/g, ''));
        value2 = Number(output.lastElementChild.innerHTML);
        output.firstElementChild.innerHTML += value2;
        switch (symbol){
            case "+":output.lastElementChild.innerHTML = `${value1 + value2}`;
                break;
            case "/":output.lastElementChild.innerHTML = `${value1 / value2}`;
                break;
            case "*": output.lastElementChild.innerHTML = `${value1 * value2}`;
                break;
            case "-": output.lastElementChild.innerHTML = `${value1 - value2}`;
                break;
        }
    }
    stage = false;
})
