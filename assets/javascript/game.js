    // Grab DOM/HTML Elements and store in variables
    var yourGuessHTML = document.getElementById('your-guess');
    // var computerGuessHTML = document.getElementById('computer-guess');
    var winsHTML = document.getElementById('wins');
    var lossesHTML = document.getElementById('losses');
    var guessesLeftHTML = document.getElementById('guesses-left'); 
    var computerGuessHTML = document.getElementById('computer-guess'); 

    // Create a variable array to hold possible computer choices 
    var choices = ["cookie", "donut", "brownie", "pie", "cake"];

    // Create variables for wins/losses
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var yourCorrectGuess = [];

    // Reset Game
    var reset = function() {
      guessesLeft = 10;
      yourGuess = [];
    }

     // Generate a computer choice at random
     var computerGuess = choices[Math.floor(Math.random() * choices.length)];

    // Whenever a key is pressed, alert "pressed a button".
    document.onkeyup = function(event) {
      // Capture user's guess
      var userGuess = event.key.toLowerCase();

      yourGuess.push(userGuess);
      // Create an html element to hold users guess

      // Create an html element to hold wins

      // Create an html element to hold number of guesses remaining

      // Create an html element to fill in the current word 
      
      // Create loop that subtracts one guess remaining onkeyup
      
      // Create loop that adds a win when word is guessed correctly
      
    
      


     



      //Set condition for wins and reset
        if (yourGuess === computerGuess) {
          wins++;
          reset();
        } else {
          guessesLeft--;
        } 

        if (guessesLeft === 0) {
          losses++;
          reset();
        }




        


        yourGuessHTML.textContent = yourGuess;
        winsHTML.textContent = wins;
        lossesHTML.textContent = losses;
        guessesLeftHTML.textContent = guessesLeft;

      

    };
