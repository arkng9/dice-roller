let diceCount = 1;

function setDice(number){
diceCount = number;
}

function rollDice(){

let resultDiv = document.getElementById("result");
resultDiv.innerHTML = "";

let total = 0;

for(let i = 0; i < diceCount; i++){

let roll = Math.floor(Math.random()*6)+1;

total += roll;

resultDiv.innerHTML += "🎲 " + roll + "<br>";
}

resultDiv.innerHTML += "<br>Toplam: " + total;

}