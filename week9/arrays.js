
makeTCOrderListFromInputs() {
    input1 = document.getElementById("names-input")
    input2 = document.getElementById("tc-input")

    input1.split(" ");

    let paragraphElement = document.getElementById("order-list");
    paragraphElement.innerHTML = "";
    for (i of input1) {
        for (j of input2) {
                paragraphElement.innerHTML = "<li>" + i + "would like some" + j +"<li>";
        }
    }
}
