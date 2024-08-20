
var userClickedPattern =[]
var gamePattern=[];    // game patterns is array to store the random color that has chosen

var buttonColors=["red", "blue", "green", "yellow"]; // the colors

var level=0;
var started=false;

$(document).keydown(function()
{ if(!started) // if the user press anybutton
{
 $("#level-title").text("Level "+level );
 nextSequence();
 started = true;
}
}
);


      //function for the clicked button}
      // this function to store the clicked button in array then, inside it ,it will check the clicked button with the random buttom in the gamepattern array
      /
$(".btn").click(function() {      
    var userChosenColor = $(this).attr("id");

 userClickedPattern.push(userChosenColor);

 playSound(userChosenColor);
 animatePress(userChosenColor); // animate

 checkedAnswer(userClickedPattern.length-1); //check the user clickedbutton with gamebutton
} // after every click  on button ,the checked answer function will make use go to  the nextseq function 
);

function checkedAnswer(currentLevel) //by every click on the button the clickedbutton will be checked with the gamepattern
{
if(gamePattern[currentLevel]===userClickedPattern[currentLevel]) //check the user clicked button with gamepattern
{
if(gamePattern.length===userClickedPattern.length) // check if the clicked button is the last index in the gamepattern so it will make a new game pattern
{
    setTimeout(function()
    {
        nextSequence();
    },1000); 

}

}
else
{
gameOver();
startOver();
}

}
function gameOver()
{
    playSound("wrong");
$("body").addClass("game-over");
$("#level-title").text("Game Over, Press Any Key to Restart");
setTimeout(function()
{
   $("body").removeClass("game-over")
}
,200);
}
function startOver()
{
gamePattern=[]; // if the user lost we must reset the gamepattern array
started=false;
level=0;
}

function nextSequence()        // the next sequence 
{ userClickedPattern=[]; // if the user cwin and move to the next pattern we must reset the userClickedPattron array
    level++;
$("#level-title").text("Level "+level);
var randomNumber = Math.floor(Math.random()*4); 
// random index to put in the array button color to chose randomly

var randomChosenColor=buttonColors[randomNumber]; // to choose color randomly
gamePattern.push(randomChosenColor); // put the chosen color in the gamePattern array

$("#"+randomChosenColor).fadeIn("100").fadeOut("100").fadeIn("100"); // to make flash on the button
playSound(randomChosenColor); // play the chosen color over

}
function playSound(name)
{
    var audio = new Audio("./sounds/"+name+".mp3"); //
    audio.play(); // play   
}
function animatePress(currentColor)
{
    $("#"+currentColor).addClass("pressed");
   setTimeout(function(){
    $("#"+currentColor).removeClass("pressed");},100);
}
