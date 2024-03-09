let generatedNumber = document.getElementById("buttonsNumber");
let buttons = [];
let winnerButtonIndex;

function generateButtons() {
  let navButtons = document.getElementById("nav-buttons");
  for (let i = 0; i < generatedNumber.value; i++) {
    let button = document.createElement("button");
    button.textContent="Button " + (i + 1);
    button.style.background = "rgba(0, 0, 255, 0.8)";
    buttons.push(button);
    navButtons.appendChild(button);
  }
}

function chooseRandomButton() {
  let winnerIndex = Math.floor(Math.random() * buttons.length);
  winnerButtonIndex = buttons[winnerIndex];
  buttons.forEach(function(button, index) {
    showButtonStatus(button);
  });
}

function showButtonStatus(button) {
  button.addEventListener('click', function() {
    if (button === winnerButtonIndex) {
      button.textContent = 'Winner Button';
    } else {
      button.textContent = 'Loser Button';
    }
  });
}
