//For Dice1
var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6) + 1;

var randomDiceImg = "dice" + randomNumber1 + ".png";
var randomImgSrc = "images/" + randomDiceImg;

document.querySelector(".img1").setAttribute("src", randomImgSrc);

//For Dice2
//For Dice1
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6) + 1;

var randomDiceImg2 = "dice" + randomNumber2 + ".png";
var randomImgSrc2 = "images/" + randomDiceImg2;

document.querySelector(".img2").setAttribute("src", randomImgSrc2);

//Deciding winner
if(randomNumber1 > randomNumber2)
    document.querySelector("h1").innerHTML = "🥳 Player1 Wins!!";
else if(randomNumber2 > randomNumber1)
    document.querySelector("h1").innerHTML = "🥳 Player2 Wins!!";
else
    document.querySelector("h1").innerHTML = "It's a draw!!";