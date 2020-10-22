// variabler
let calculate = "";

// Get needed elements.
const equal = document.querySelector(".btn-equal");
const clear = document.querySelector(".btn-clear");
const button = document.querySelectorAll(".btn");

// hämta siffror
button.forEach((item) => {
  item.addEventListener("click", (event) => {
    calculate = calculate + item.getAttribute("data-num");
    document.querySelector(".screen").value = calculate;
  });
});

// Evaluates sum.
equal.addEventListener("click", (event) => {
  calculate = eval(calculate).toString();

  document.querySelector(".screen").value = calculate;
  calculate = "";
});

// Clears screen.
clear.addEventListener("click", (event) => {
  document.querySelector(".screen").value = "";
  calculate = "";
});
