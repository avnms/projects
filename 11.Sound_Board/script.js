const sounds = document.querySelectorAll("audio");
const soundManager = {};

sounds.forEach((sound) => {
  const button = document.createElement("button");
  button.classList.add("btn");
  button.innerText = sound.id;

  soundManager[sound.id] = {
    sound: sound,
    button: button,
  };

  button.addEventListener("click", () => {
    stopAllSounds(soundManager);
    soundManager[sound.id].sound.play();
  });

  document.getElementById("buttons").appendChild(button);
});

function stopAllSounds(soundObj) {
  for (const sound in soundObj) {
    soundObj[sound].sound.pause();
    soundObj[sound].sound.currentTime = 0;
  }
}
