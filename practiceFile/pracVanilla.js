const numberText = document.querySelector("#number-text");
const growBtn = document.querySelector("#grow-btn");

let counter = 0;

function onClickBtn() {
  numberText.innerText = "Total Clicks : " + counter++;
}

growBtn.addEventListener("click", onClickBtn);
