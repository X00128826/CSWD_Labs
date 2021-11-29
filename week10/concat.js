
function concatenateInputs() {
    let input = document.getElementsByName("input");
    let x = "";
    for(let y of input){
        x += y.value;
    }
    document.querySelector(".result").innerHTML = x;
}