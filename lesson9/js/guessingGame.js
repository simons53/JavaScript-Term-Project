document.addEventListener("DOMContentLoaded", function () {
    
var start = { tries: 0 };

var computer;  
var tries = 0;

document.getElementById("getNumber").addEventListener("click", function () {
    console.log("Start New Game button clicked");
    tries = 0;
    document.getElementById("guess").value = "";
    document.getElementById("tries").value = tries;
    computer = Math.floor(Math.random() * 100) + 1;
    console.log("Generated number:", computer);   
    document.getElementById("comments").value = "I have a number and I am waiting for you to guess it";
});

document.getElementById("checkGuess").addEventListener("click", function () {
    try {
        if (typeof computer === 'undefined') {
            throw "You need to start a new game first!";
        }
        var guess = parseInt(document.getElementById("guess").value);

		console.info("User guess:" + guess);
		console.count("Check button clicked");
        if (isNaN(guess)) {
            throw "Please enter a valid number!";
        } else if (guess < 1 || guess > 100) {
            throw "Please enter a number between 1 and 100!";
        }

        tries++;
        document.getElementById("tries").value = tries;

        if (computer === guess) {
            document.getElementById("comments").value = "You guessed correctly - congratulations! It only took " + tries + " tries!";
        } else if (computer < guess) {
            document.getElementById("comments").value = "Your guess is too high, try again!";
        } else {
            document.getElementById("comments").value = "Your guess is too low, try again!";
        }
    } catch (errMsg) {
        document.getElementById("comments").value = errMsg;
        document.getElementById("guess").value = "";
    }
});
});
