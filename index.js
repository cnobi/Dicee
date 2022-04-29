// Dicee JS created in the OFFICE - April 28, 2022

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;


// pick out random dice image betn dice1.png to dice6. png then place it 
// inside <img> using setAttribute.

var diceRollOne = "images/dice" + randomNumber1 + ".png";
var diceRollTwo = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", diceRollOne);
document.querySelector(".img2").setAttribute("src", diceRollTwo);

// Change the text in the h1 depending on the result

if ( randomNumber1 > randomNumber2 ) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if ( randomNumber2 > randomNumber1 ) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw! Roll the dice again!";
}
