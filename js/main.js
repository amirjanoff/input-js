var elInputText = document.querySelector("[data-input-text]");
var elList = document.querySelector("[data-text]");
var elBtn = document.querySelector("[data-btn]");

elBtn.addEventListener("click", function (evt) {
  evt.preventDefault()
  var elLi = document.createElement("li");
  elLi.textContent = elInputText.value;
  elList.appendChild(elLi);
});
