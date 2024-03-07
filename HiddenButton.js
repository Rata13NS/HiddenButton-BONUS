let generatedNumber = document.getElementById("buttonsNumber");
let buttons = [];

function copyToClipboard() {
    generatedNumber.select();
    console.log(generatedNumber.value);
    navigator.clipboard.writeText(generatedNumber.value);
    ++contor;
}

function generateButtons() {
    let navButtons = document.getElementById("nav-buttons");
    for (let i=0; i<generatedNumber.value;i++)
    {
        let button = document.createElement("button");
        button.textContent="Button " + (i + 1);
        button.style.background = "rgba(0,0,255,0.8)";
        buttons.push(button);
        navButtons.appendChild(button);
    }
}

function chooseRandomButton() {
    let winnerIndex = Math.floor(Math.random() * buttons.length);
    let winnerButtonIndex = buttons[winnerIndex];
    console.log(winnerIndex);
    buttons.forEach(function(button, index) {
        button.addEventListener('click', function() {
          if (button === winnerButtonIndex) {
            button.textContent = 'Castigator';
          } else {
            button.textContent = 'Necastigator';
          }
        });
      });
}
