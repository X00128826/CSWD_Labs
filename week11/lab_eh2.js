
//function changeBodyToInputColour() {
    //let colour = document.getElementById("col-inp").value;
    //document.body.style.background = colour;
//}

//function actbtn() {
  //  document.getElementById("colset-b").addEventListener("click", changeBodyToInputColour);

 //}

function changeBodyToInputColour() {
    let colour = document.getElementById("col-inp").value;
    document.body.style.background = colour;
    document.getElementById("colset-b").addEventListener("click", changeBodyToInputColour);
}


 
function performOpertaion(operation) {

    document.getElementsByTagName("button").value
    for (let index = 0; index < buttonArray.length; ++index) {
        buttonArray[index].addEventListener("click", function() { performOpertaion("-"); } );
        if (operation == '+') {
            document.getElementById("answer").innerHTML
        
        } else if (operation == '-') {
            document.getElementById("answer").innerHTML 
        
        } else if (operation == '*') {
            document.getElementById("answer").innerHTML 
        
        } else if (operation == '/') {
            document.getElementById("answer").innerHTML 
        
        } else {
            alert("Not a valid oprand!");
        }
    }
}