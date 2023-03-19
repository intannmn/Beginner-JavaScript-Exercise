const s1Button = document.querySelector("#s1Button");
const s2Button = document.querySelector("#s2Button");
const s1Display = document.querySelector("#s1Display");
const s2Display = document.querySelector("#s2Display");
const reset = document.querySelector("#reset");
const select = document.querySelector("#select");

let score1 = 0;
let score2 = 0;
let target = 5;
let gameOver = false;

s1Display.innerHTML = score1;
s1Button.addEventListener("click", fP1);
function fP1() {
  if (!gameOver) {
    score1 += 1;
    if (score1 === target) {
      gameOver = true;
      winLose();
    }
  }
  s1Display.innerHTML = score1;
}

s2Display.innerHTML = score2;
s2Button.addEventListener("click", fP2);
function fP2() {
  if (!gameOver) {
    score2 += 1;
    if (score2 === target) {
      gameOver = true;
      winLose();
    }
  }
  s2Display.innerHTML = score2;
}

function winLose() {
  if (score1 === target) {
    console.log("Player 1 - Menang");
    console.log("Player 2 - Kalah");
  } else {
    console.log("Player 1 - Kalah");
    console.log("Player 2 - Menang");
  }
}

reset.addEventListener("click", fReset);
function fReset() {
  score1 = 0;
  score2 = 0;
  s1Display.innerHTML = score1;
  s2Display.innerHTML = score2;
  gameOver = false;
}

select.addEventListener("change", () => {
  target = parseInt(select.value);
  fReset();
});
