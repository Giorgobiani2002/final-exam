let blueButton = document.querySelector(".blue");
let redButton = document.querySelector(".red");
let greenButton = document.querySelector(".green");
blueButton.addEventListener("click", function () {
  console.log("hello");
  let boxes = document.querySelector(".boxes");
  let blueDiv = document.createElement("div");
  blueDiv.classList.add("blueDiv");
  boxes.appendChild(blueDiv);
});
redButton.addEventListener("click", function () {
  console.log("hello");
  let boxes = document.querySelector(".boxes");
  let redDiv = document.createElement("div");
  redDiv.classList.add("redDiv");
  boxes.appendChild(redDiv);
});
greenButton.addEventListener("click", function () {
  console.log("hello");
  let boxes = document.querySelector(".boxes");
  let greenDiv = document.createElement("div");
  greenDiv.classList.add("greenDiv");
  boxes.appendChild(greenDiv);
});
