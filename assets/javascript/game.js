$(document).ready(function(){

    var randomNum = Math.floor(Math.random() * 101 + 19);

    $("#target-number").text(randomNum);

    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)

    var guessScore = 0;

    var winCount = 0;

    $("#wins").text(winCount);

    var lossCount = 0;

    $("#losses").text(lossCount);

    function reset() {

        randomNum = Math.floor(Math.random() * 101 + 19);

        $("#target-number").text(randomNum);

        num1= Math.floor(Math.random()*11+1)
        num2= Math.floor(Math.random()*11+1)
        num3= Math.floor(Math.random()*11+1)
        num4= Math.floor(Math.random()*11+1)

        var guessScore = 0;

        $("#your-score").text(guessScore);

    }

    function win() {

        alert("You won!");

        winCount++;

        $("#wins").text(winCount);

        reset();

    }

    function lose() {

        alert("You lost!");

        lossCount++;

        $("#losses").text(lossCount);

        reset();

    }

    $("#amethyst").on ('click', function(){

        guessScore = guessScore + num1;

        console.log("New guessScore = " + guessScore);

        $("#your-score").text(guessScore); 
            
            if (guessScore === randomNum){
              win();
            }
            else if ( guessScore > randomNum){
              lose();
            }  
    })

    $("#emerald").on ('click', function(){

        guessScore = guessScore + num2;

        console.log("New guessScore = " + guessScore);

        $("#your-score").text(guessScore); 
            
            if (guessScore === randomNum){
              win();
            }
            else if ( guessScore > randomNum){
              lose();
            }  
    })

    $("#ruby").on ('click', function(){

        guessScore = guessScore + num3;

        console.log("New guessScore = " + guessScore);

        $("#your-score").text(guessScore); 
            
            if (guessScore === randomNum){
              win();
            }
            else if ( guessScore > randomNum){
              lose();
            }  
    })

    $("#sapphire").on ('click', function(){

        guessScore = guessScore + num4;

        console.log("New guessScore = " + guessScore);

        $("#your-score").text(guessScore); 
            
            if (guessScore === randomNum){
              win();
            }
            else if ( guessScore > randomNum){
              lose();
            }  
    })

})