const jokeElement = document.getElementById("joke");
const jokeButtonElement = document.getElementById("joke-button");

async function generateJoke() {
  const config = { headers: { Accept: "application/json" } };
  const response = await fetch("https://icanhazdadjoke.com/", config);
  const data = await response.json();
  jokeElement.textContent = data.joke;
}

generateJoke();
jokeButtonElement.addEventListener("click", generateJoke);
