/*var x= document.querySelectorAll(".drum"); 
var buttonlist=Array.from(x);
 var crash = new Audio("./sounds/crash.mp3");
 var kick = new Audio("./sounds/kick-bass.mp3");
 var snare = new Audio("./sounds/snare.mp3");          // by looping 
 var tom1 = new Audio("./sounds/tom-1.mp3");
 var tom2 = new Audio("./sounds/tom-2.mp3");
 var tom3 = new Audio("./sounds/tom-3.mp3");
 var tom4 = new Audio("./sounds/tom-4.mp3");
 */
/* var drums=[crash,kick,snare,tom1,tom2,tom3,tom4];
 for(let i=0; i<buttonlist.length; i++) 
 {
    buttonlist[i].addEventListener("click",function()
    { 
        
drums[i].play();
    });
 }
 var y;
 */
 
  /*for (let x = 0; x < buttonList.length; x++) {
            var image = "./images/" + drums[x] + ".png";
            document.querySelector(".drum").style.backgroundImage = "url('" + image + "')";
        }*/
    
            var x= document.querySelectorAll(".drum"); // this decrease the lines from 10 to 1
for(var i=0;i<x.length; i++)
    // event listener for button
{    document.querySelectorAll(".drum")[i].addEventListener("click" ,function(){
var buttonInnerHtml= this.innerHTML;

MakeSound(buttonInnerHtml);
buttonAnimation(buttonInnerHtml);


}
);
    //event listenr for keyboard 
}
document.addEventListener("keydown", function(event)
{
    MakeSound(event.key);
    buttonAnimation(event.key);

});
// function tto make sound
function MakeSound(key)
{
    
    switch(key)
{ // by switch
    case"w":

    var crash=new Audio("./sounds/crash.mp3")
    crash.play();
    break;

    case"a":
    var kick=new Audio("./sounds/kick-bass.mp3")
    kick.play();
    break;

    case"s":
    var snare=new Audio("./sounds/snare.mp3")
    snare.play();
    break;

    case"d":
    var tom1=new Audio("./sounds/tom-1.mp3")
    tom1.play();
    break;

    case"j":
    var tom2=new Audio("./sounds/tom-2.mp3")
    tom2.play();
    break;

    case"k":
    var tom3=new Audio("./sounds/tom-3.mp3")
    tom3.play();
    break;

    case"l":
    var tom4=new Audio("./sounds/tom-4.mp3")
    tom4.play();
    break;

    default:
        console.log("Unknown");
    
    
    
}

}
function buttonAnimation(currentKey)
{
var activeButton = document.querySelector("."+currentKey);
activeButton.classList.add("pressed");
setTimeout(function(){
    activeButton.classList.remove("pressed");
},100);

}

