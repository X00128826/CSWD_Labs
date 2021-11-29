
let pers = {name: "", surname: "", year: "", course: ""}

function saveData() {    
    pers.name = document.getElementById("name").value 
    pers.surname = document.getElementById("surname").value
    pers.year = document.getElementById("year").value
    pers.course = document.getElementsByTagName("option").value
}

function printData() {
    let x = document.getElementById("paragraph").innerHTML;
    x.innerHTML = "";
    for (let p of saveData()){
        x.innerHTML += "<p>" + p.name + p.surname + "is in year" + p.year + "and is doing the course" + p.course + "." + "</p>"
    }
}