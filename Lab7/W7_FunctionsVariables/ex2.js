function buttonAction() {
    getRand1to10()
}

function buttonAction1() {
    tripledRandNum()
}

function getRand1to10() {
    let r = Math.floor(Math.random() * 10) + 1
    document.getElementById('rand-num').innerHTML = r;
}

function tripledRandNum() {
    let s = document.getElementById('rand-num').innerHTML * 3 
    document.getElementById('tripled').innerHTML = s;

}