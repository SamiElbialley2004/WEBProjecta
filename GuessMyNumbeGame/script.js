'use strict';
// making the numbers global to deceease the parameters
// and also to be easily to change and updated
let score= Number($('.score').text());
let highestscore=Number($('.highscore').text());
let myNumber
//1- make a randoming function 
function Randoming()
{
   let  rNumber=Math.floor(Math.random()*20)+1;

    console.log(rNumber+"Randoming...");
    return rNumber;
}
//2- make my function private 
function Guess()
{
  myNumber= Randoming();
console.log(myNumber);//check
CheckMyNumber(myNumber);

}
//3- divide the function to many functions
//3.1 i check the score 
function checkScore(score)
{
    if(score==0)
        {
            $('.message').text('your chance are over')
            $('.score').text('0')
            $('h1').text('TryAgain');
    
        }
        else if(score>0)
        {
            $('.score').text(score.toString());
             
        }
        else
        { $('.message').text('No Numbers');
            $('.score').text('0');
        }
}
//3.2 the logic of the game and use the DOM

function theLogic(myNumber,checkNumber)
{
    if(checkNumber==myNumber) //check
    { //change the highest score
     if(score>highestscore) 
     {
        highestscore=score; //change the highscore

        $('.highscore').text(highestscore.toString()); 
     }
     
     $('body').addClass("cool");//add a class 
     $('.number').text(myNumber);
     $('.message').text('Correct Number!');
     $('h1').text('COOL');

    }
    else 
    {
    score--;
    $('h1').text('Not Cool');
    
    checkNumber<myNumber? $('.message').text('Too Low'):$('.message').text('Too High');
    checkScore(score);
    


    
    }

}
function CheckMyNumber(myNumber)//my first event listener 
{
   
    $('.btn.check').click(function()
    {
        let checkNumber= Number($('input').val()); //get the guess number
        console.log(checkNumber);
        theLogic(myNumber,checkNumber);
            
    });
}
//Randoming();
Guess();


$('.btn.again').click(function() //the second event listener
{
     myNumber = Randoming();
    $('body').removeClass("cool");
    score=20;
    $('.score').text(score.toString());
    $('input').val('');
    $('.message').text("Start guessing...");
    $('.highscore').text(highestscore.toString());   
    $('h1').text("Guess My Number!");
    $('.number').text('?');
    CheckMyNumber(myNumber); 

});
