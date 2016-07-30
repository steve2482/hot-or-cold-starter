
$(document).ready(function(){

    var randomnumber;

    /*--- Page Load New Game ---*/
    function newGame(){
        randomnumber = Math.floor((Math.random() * 100) + 1);
        console.log(randomnumber);
    }
    
    newGame();

    /*--- Click New Game ---*/
    $(".new").click(function() {
        newGame();
    });

    /*--- Click to Submit Guess ---*/

    $("#guessButton").click(function(e) {
        e.preventDefault();
        if ($("#userGuess").val() > randomnumber + 20) {
            $("#feedback").text("Cold!");
        };
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