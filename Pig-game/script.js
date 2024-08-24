'use strict';
let currentscore=0;
let score=0;
let totalscore1=0;
let totalscore2=0;
let finishs=true;
$('#score--0').text(0);
$('#score--1').text(0);
$('.dice').addClass('hidden');
function RollDice()
{
    let rollDice= Math.floor(Math.random()*6)+1 ;
return rollDice;;
}
// change the dices easliy
function displayDiceRoll(rollDice)
{ score=RollDice();
let Dice=`dice-${score}.png`;

$('.dice').attr("src",Dice);
}



$('.btn--roll').click(
    function()
    { 
        if(finishs){  $('.dice').removeClass('hidden');
        displayDiceRoll(RollDice());
      //  console.log(score);
      Score();
        }
        
   

    }
);

$('.btn--hold').click(function()
{  // to stop running if tge score > 100
    if(finishs){
if ($('.player--0').hasClass('player--active')) {
    totalscore1 += currentscore;
    $('#score--0').text(totalscore1);
} else {
    totalscore2 += currentscore;
    $('#score--1').text(totalscore2);
}
currentscore = 0;
if ($('.player--0').hasClass('player--active')) {
    $('#current--0').text(currentscore);
} 
switchPlayer();
updateScore();
finish();
    }
});
$('.btn--new').click(function()
{
currentscore=0;
score=0;
finishs=true;
totalscore1=0;
totalscore2=0;
$('.dice').addClass('hidden');
$('#current--1').text(0);
$('#current--0').text(0);
$('#score--0').text(0);
$('#score--1').text(0);
if($('.player--1').hasClass('player--active'))
{
    $('.player--1').removeClass('player--active');
    $('.player--0').addClass('player--active');
}
$('.player--1').removeClass('player--winner');
$('.player--0').removeClass('player--winner');

});



function updateScore()
{
    if ($('.player--0').hasClass('player--active'))
        {
            $('#score--0').text(totalscore1);
            $('#current--0').text(currentscore);
        }  
        else
        {
            $('#score--1').text(totalscore2);
            $('#current--1').text(currentscore);
        }
}

function switchPlayer()
{
    $('.player--0').toggleClass('player--active');
    $('.player--1').toggleClass('player--active');
}

function Score()
{
    if(score!=1)  
        {    
        currentscore+=score;
         $('.player--0').hasClass('player--active')?$('#current--0').text(currentscore):$('#current--1').text(currentscore);
        }
        else
        {
        currentscore=0;
         $('.player--0').hasClass('player--active')?$('#current--0').text(currentscore):$('#current--1').text(currentscore);
        switchPlayer();
         } 
         updateScore();   
  }
function finish()
{
if(totalscore1>=100)
{

    $('.player--0').addClass('player--winner');
    $('.dice').addClass('hidden');
    finishs=false;
}
if(totalscore2>=100)
{
    $('.player--1').addClass('player--winner');
    $('.dice').addClass('hidden');
    finishs=false;
}
}

