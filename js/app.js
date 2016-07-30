
$(document).ready(function(){

    var randomnumber;
    var clicks = 1;

    /*--- Page Load New Game ---*/
    function newGame(){
        randomnumber = Math.floor((Math.random() * 100) + 1);
        console.log(randomnumber);
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
        if ($("#userGuess").val() > randomnumber ) {
            $("#feedback").text("HOT!!");
        }
        else if ($("#userGuess").val() > randomnumber + 5) {
            $("#feedback").text("Warm!");
        }
        else if ($("#userGuess").val() > randomnumber + 10) {
            $("#feedback").text("Lukewarm!");
        }
        else if ($("#userGuess").val() > randomnumber + 20) {
            $("#feedback").text("Cold!");
        }
        else if ($("#userGuess").val() < randomnumber ) {
            $("#feedback").text("HOT!!");
        }
        else if ($("#userGuess").val() < randomnumber - 5) {
            $("#feedback").text("Warm!");
        }
        else if ($("#userGuess").val() < randomnumber - 10) {
            $("#feedback").text("Lukewarm!");
        }
        else if ($("#userGuess").val() < randomnumber - 20) {
            $("#feedback").text("Cold!");
        }
        else  {
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