let diceCount = 1;
let isRolling = false;

function setDice(number, buttonElement) {
  if (isRolling) return;

  diceCount = number;

  const buttons = document.querySelectorAll(".dice-btn");
  buttons.forEach((btn) => btn.classList.remove("active"));
  buttonElement.classList.add("active");
}

function rollDice() {
  if (isRolling) return;

  isRolling = true;

  const rollButton = document.getElementById("rollButton");
  const statusText = document.getElementById("statusText");
  const diceContainer = document.getElementById("diceContainer");
  const totalBox = document.getElementById("totalBox");
  const totalValue = document.getElementById("totalValue");

  rollButton.disabled = true;
  rollButton.textContent = "Bekle...";
  statusText.textContent = "Zarlar atılıyor...";
  totalBox.classList.add("hidden");

  diceContainer.innerHTML = "";

  for (let i = 0; i < diceCount; i++) {
    const tempDice = document.createElement("div");
    tempDice.className = "dice-box shake";
    tempDice.textContent = "🎲";
    diceContainer.appendChild(tempDice);
  }

  setTimeout(() => {
    let total = 0;
    diceContainer.innerHTML = "";

    for (let i = 0; i < diceCount; i++) {
      const roll = Math.floor(Math.random() * 6) + 1;
      total += roll;

      const diceBox = document.createElement("div");
      diceBox.className = "dice-box";
      diceBox.textContent = roll;
      diceContainer.appendChild(diceBox);
    }

    totalValue.textContent = total;
    totalBox.classList.remove("hidden");
    statusText.textContent = "Sonuç hazır.";

    setTimeout(() => {
      rollButton.disabled = false;
      rollButton.textContent = "Zar At";
      statusText.textContent = "";
      isRolling = false;
    }, 800);
  }, 900);
}