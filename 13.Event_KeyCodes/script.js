const eventTitleElement = document.getElementById("event__title");
const eventKeyElement = document.getElementById("event__key");
const eventKeyCodeElement = document.getElementById("event__keycode");
const eventCodeElement = document.getElementById("event__code");

addEventListener("keydown", (event) => {
  const key = event.key === " " ? "Space" : event.key;
  eventKeyElement.textContent = key;
  eventKeyCodeElement.textContent = event.keyCode;
  eventCodeElement.textContent = event.code;
  eventTitleElement.classList.add("hide");
});
