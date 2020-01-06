//Randomly choose a target number between 19-120.
var targetNumber = Math.floor(Math.random() * 101) +19;


$("#random-crystal").text("Target Collection: " + targetNumber);
//assign the random targetNumber to the random-crystal div.


// The beginning of trying to figure out how to make sure the crystals are different numbers.
// var crystalNumber = [1,2,3,4,5,6,7,8,9,10,11,12];

//Create base score values
var currentScore = 0;
var winCount = 0;
var lossCount = 0;
//reset function
function reset() {
    targetNumber = Math.floor(Math.random() * 101) +19;

    $(".crystal-button").each(function crystalValue() {
        //creates the random number
        crystalNumber = Math.floor(Math.random() * 12) + 1;
        //applies the number to each .crytstal-button
        $(this).attr("crystal-value", crystalNumber);
    })
    currentScore = 0;
 
    $("#random-crystal").text("Target Collection: " + targetNumber);
    
}


//The Game
$(document).ready(function () {
    //creates a number for each crystal
    $(".crystal-button").each(function crystalValue() {
        //creates the random number
        crystalNumber = Math.floor(Math.random() * 12) + 1;
        //applies the number to each .crytstal-button
        $(this).attr("crystal-value", crystalNumber);
        

    })

    


    //When a crystal is clicked the value is added to the user's score.
    $(".crystal-button").on("click", function () {
        currentScore = currentScore + parseInt($(this).attr("crystal-value"));
        $("#total-crystal").text("Total Collected: " + currentScore);
    //if the total collected equals the target collection, the player wins!
    if (currentScore === targetNumber) {
        winCount++;
        //adds 1 to the win text
        $("#wins").text("Wins: " + winCount);
        //game resets
        reset();
    }
    //if the total collected exceeds the target collection, the player loses!
    else if (currentScore > targetNumber) {
        lossCount++;
        //add 1 to the loss text
        $("#losses").text("Losses: " + lossCount);
        //game resets
        reset();
    }
    
    })

    

})
