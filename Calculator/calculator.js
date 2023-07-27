const result = document.getElementById("result")
const numberOne = document.getElementById("numberOne")
const numberTwo = document.getElementById("numberTwo")

function add() {
    let addAns = parseFloat(numberOne.value) + parseFloat(numberTwo.value) ;
    result.innerHTML = `<br/>${addAns}`;
    // confetti
   
}

function subtract() {
    let subAns = parseFloat(numberOne.value) - parseFloat(numberTwo.value);
    result.innerHTML = `<br/>${subAns}`;
}