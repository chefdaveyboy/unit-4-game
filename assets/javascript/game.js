//Randomly choose a target number between 19-120.
var targetNumber = Math.floor(Math.random() * 101) + 19;
//Assign a random value to each crystal between 1-12.
var crystalNumber = Math.floor(Math.random() * 12) + 1;

//assign the random targetNumber to the random-crystal div.
$("#random-crystal").text("Target Collection: " + targetNumber);

//Create base score values
var currentScore = 0;
var winCount = 0;
var lossCount = 0;


//Create and object for each crystal.

    //Hide the random value until the crystal is selected.
    //Make sure that each crystal is a different value?

//on click event for when a crystal is clicked on
    //check to see if the players "score" is equal to the target score.
    //if score = target, the player wins!
    //if score < target, the game continues.
    //if score > target, the game is over.

//create a reset fuction to reset the game after a win or a loss.
function reset() {
    targetNumber = Math.floor(Math.random() * 101) + 19;
    crystalNumber = Math.floor(Math.random() * 12) + 1;
    currentScore = 0;
}
    //New Target Number
    //New Crystal Values
    //Score counter = 0

//Display games won and lost.