// variabler
let calculate = "";

const equal = document.querySelector(".btn-equal");
const clear = document.querySelector(".btn-clear");
const operation = document
  .querySelector(".btn-yellow")
  .getAttribute("data-num");
const button = document.querySelectorAll(".btn");
console.log(operation);

// hämta siffror
button.forEach((item) => {
  item.addEventListener("click", (event) => {
    calculate = calculate + item.getAttribute("data-num");
    console.log(calculate);
    document.querySelector(".screen").value = calculate;
  });
});

equal.addEventListener("click", (event) => {
  calculate = eval(calculate).toString();

  document.querySelector(".screen").value = calculate;
  calcutale = "";
});

clear.addEventListener("click", (event) => {
  document.querySelector(".screen").value = "";
  calculate = "";
});
