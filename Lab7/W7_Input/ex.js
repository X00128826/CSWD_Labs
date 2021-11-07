
function add() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let ans = num1 + num2;

    document.getElementById("answer").innerHTML = ans;
}

function subtract() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    
    let ans = num1 - num2;

    
    document.getElementById("answer").innerHTML = ans;
}

function multiply() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    
    let ans = num1 * num2;

    
    document.getElementById("answer").innerHTML = ans;
}

function divide() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    
    let ans = num1 / num2;

    document.getElementById("answer").innerHTML = ans;
}


