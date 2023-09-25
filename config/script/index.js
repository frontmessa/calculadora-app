
let visorEL;
let buttonsEls;


document.addEventListener("DOMContentLoaded", init);


function init() {

    setElements();



}

function setElements() {

    visorEL = document.querySelector("#display>span");
    buttonsEls = Array.from(document.querySelectorAll("#buttonsContainer>button"));

    addOnClickOnButtons();

}

function addOnClickOnButtons() {

    console.log(buttonsEls.length);
    console.log(buttonsEls[0]);



    for (let i = 0; i < buttonsEls.length; i++) {

        buttonsEls[i].onclick = handleOnClickOnButtons;



    }



}

function handleOnClickOnButtons(event) {

    const buttonValue = event.target.innerText;
    const convertedButtonValue = parseInt(buttonValue);
    const buttonValueIsNumber = !isNaN(convertedButtonValue);

    if (buttonValueIsNumber === true) {
        writeOnVisor(buttonValue);




    }else{
        eraseVisor()
    }




}

function writeOnVisor(_digit) {

    visorEL.innerHTML += _digit;
}

function eraseVisor() {
    visorEL.innerHTML = "";
}