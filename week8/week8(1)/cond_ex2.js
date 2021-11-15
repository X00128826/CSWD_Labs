
function performOpertaion(operation) {

    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    if (operation == '+') {
        let r = a + b;
        document.getElementById("answer").innerHTML = r;
    
    } else if (operation == '-') {
        let r = a - b;
        document.getElementById("answer").innerHTML = r;
    
    } else if (operation == '*') {
        let r = a - b;
        document.getElementById("answer").innerHTML = r;
    
    } else if (operation == '/') {
        let r = a / b;
        document.getElementById("answer").innerHTML = r;
    
    } else {
        alert("Not a valid oprand!");
    }

}