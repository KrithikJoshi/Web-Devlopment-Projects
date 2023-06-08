const myheading = document.querySelector("h1");
myheading.textContent = "Number Guessing";

const input = document.querySelector(".input");
input.placeholder = "type the numbers here";

const button = document.querySelector(".btn");

function myfunction() {
  var input = document.getElementById("input--id");
  var button1 = document.getElementById("btn1");
  input.innerHTML = input.innerHTML + button1.value;
}
