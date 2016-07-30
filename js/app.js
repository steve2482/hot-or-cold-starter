
$(document).ready(function(){

    var randomNumber = 10;
    var clicks = 1;

    /*--- Page Load New Game ---*/
    function newGame(){
        // randomNumber = Math.floor((Math.random() * 100) + 1);
        console.log(randomNumber);
    }
    
    newGame();

    /*--- Click New Game ---*/
    $(".new").click(function() {
        newGame();
        $("#feedback").text("Make your Guess!");
    });

    /*--- Click to Submit Guess ---*/
    $("#guessButton").click(function(e) {
        e.preventDefault();
        var userValue = parseInt($("#userGuess").val());
        console.log(userValue, randomNumber);
        if (userValue > randomNumber ) {
            $("#feedback").text("HOT!!");
        }
        if (userValue > randomNumber + 5) {
            $("#feedback").text("Warm!");
        }
        if (userValue > randomNumber + 10) {
            $("#feedback").text("Lukewarm!");
        }
        if (userValue > randomNumber + 20) {
            $("#feedback").text("Cold!");
        }
        if (userValue < randomNumber ) {
            $("#feedback").text("HOT!!");
        }
        if (userValue < randomNumber - 5) {
            $("#feedback").text("Warm!");
        }
        if (userValue < randomNumber - 10) {
            $("#feedback").text("Lukewarm!");
        }
        if (userValue < randomNumber - 20) {
            $("#feedback").text("Cold!");
        }    
        if (userValue === randomNumber)  {
            alert("You are the winner, hahahahaha, you are the winner, hahaahaa");
        }
        
        
    /*--- # of Guess' Feedback*/
        $("#count").text(clicks++);

    /*--- #'s Guessed So Far ---*/
        $("#guessList").append(
            "<li>" + $("#userGuess").val() + "</li>");      
    });  	

    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);
    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });
});