"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (score === 0) {
    displayMessage("🥲 Game Over");
    document.querySelector("body").style.backgroundColor = "#f00";
    return;
  }

  if (!guess && guess >= 0) {
    // document.querySelector(".message").textContent = ;
    displayMessage("⛔ Nenhum Número");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Número Correcto");

    // Manipulando CSS com o JavaScript
    document.querySelector("body").style.backgroundColor = "#005be4";
    document.querySelector(".number").style.width = "30rem";

    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? "📈 Muito alto" : "📉 Muito baixo");
    score--;
    document.querySelector(".score").textContent = score;
  }
  //   else if (guess > secretNumber) {
  //     document.querySelector(".message").textContent = "📈 Muito alto";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else if (guess < secretNumber) {
  //     document.querySelector(".message").textContent = "📉 Muito baixo";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   }
});

document.querySelector(".reset").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("😎 Tente Adivinhar...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#00012c";
  document.querySelector(".number").style.width = "15rem";
});
