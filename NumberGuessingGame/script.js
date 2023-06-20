const myheading = document.querySelector("h1");
myheading.textContent = "Number Guessing";

const input = document.querySelector(".input");
input.placeholder = "type the numbers here";

const button = document.querySelector(".btn");

function myfunction(val) {
  var input = document.getElementById("input--id");
  input.value = val;
}

let randomNumber = Math.floor(Math.random()*10) + 1;

const guesses = document.querySelector(".guessses");
const lastresult = document.querySelector(".submit");
const loworhi = document.querySelector(".loworhi");


const guessSubmit = document.querySelector(".guesssubmit");
const guessField =  document.querySelector(".guessfield");

if (guesses >=  lastresult) {
  console.log("high")
}
else if(guesses <= lastresult){
  console.log("low")
}

