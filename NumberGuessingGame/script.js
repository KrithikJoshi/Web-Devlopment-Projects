const myheading = document.querySelector("h1");
myheading.textContent = "Number Guessing";

const input = document.querySelector(".input");
input.placeholder = "type the numbers here";

const button = document.querySelector(".btn");

function myfunction(val) {
  var input = document.getElementById("input--id");
  input.value = val;
}

const guesses = document.querySelector(".guessses");
const lastresult = document.querySelector(".submit");
const loworhi = document.querySelector(".loworhi");

lastresult.addEventListener("click", checkWin);

function checkWin() {
  let guessedNum = input.value;
  // let randomNumber = Math.floor(Math.random() * 10);
  let randomNumber = 5;

  if (guessedNum == "") {
    alert("Invalid Input");
  } else if (guessedNum == randomNumber) {
    alert("Win");
  } else if (guessedNum > randomNumber) {
    alert("Decrease the Selected Number");
  } else {
    alert("Increase the Selected Number");
  }
}




//project completed