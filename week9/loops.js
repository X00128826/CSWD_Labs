
function printEven(max) {
    for (let i = 0; i < max; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}

function appendSpace(str) {
    let space = ' ';
    for (let i in str) {
        space += i
    }
    console.log(space)
}

function spaceOut() {
    let text = document.getElementById("word").innerHTML
    for (i in text) {
        appendSpace(i)
        document.getElementById("spaced").innerHTML
    }

}

function populateTemplate() {
    let number0fParagraphs = document.getElementById("num-pgphs").value
    for (let i = 0; i < number0fParagraphs; i++){
            let paragarph = document.getElementById("txt");
            paragarph.innerHTML  += "<p>" + "Paragraph" + number0fParagraphs +  "<p>";
    }
}