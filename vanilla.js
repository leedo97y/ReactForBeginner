const numberText = document.querySelector("#number-text");
const growBtn = document.querySelector("#grow-btn");

numberText.innerText = 0;

function onClickBtn(event) {
  event.preventDefault();
  console.dir(event);
  numberText.innerText++;
}

growBtn.addEventListener("click", onClickBtn);
