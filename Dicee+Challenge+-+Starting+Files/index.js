var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
var imgSrc1 = "./images/dice" + randomNumber1 + ".png"; // Construct the image source string
document.querySelector(".img1").setAttribute("src", imgSrc1); // Set the src attribute of the image
var randomNumber2 = Math.floor(Math.random() * 6) + 1; 
var imgSrc2 = "./images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", imgSrc2); // Set the src attribute of the image

if(randomNumber1 < randomNumber2) 
        {
  document.querySelector("h1").innerHTML ="Player 2 wins!";

    }
    else if(randomNumber2 < randomNumber1)
    {
    document.querySelector("h1").innerHTML ="Player 1 wins!";
    }
    else 
    {
        document.querySelector("h1").innerHTML ="Drawn!";
    }
