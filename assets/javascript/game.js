//Randomly choose a target number between 19-120.
var targetNumber = Math.floor(Math.random() * 101) +19;
//Assign a random value to each crystal between 1-12.

$("#random-crystal").text("Target Collection: " + targetNumber);
//assign the random targetNumber to the random-crystal div.


//Create base score values
var currentScore = 0;
var winCount = 0;
var lossCount = 0;

function reset() {
    crystalNumber = Math.floor(Math.random() * 12) + 1;
    currentScore = 0;
    $("#random-crystal").text("Target Collection: " + targetNumber);
    console.log(targetNumber);
}
    

//The Game
$(document).ready(function () {
    //creates a number for each crystal
    $(".crystal-button").each(function crystalValue() {
        //creates the random number
        crystalNumber = Math.floor(Math.random() * 12) + 1;
        //applies the number to each .crytstal-button
        $(this).attr("crystal-value", crystalNumber);

        console.log(crystalNumber);

    })


    //When a crystal is clicked the value is added to the user's score.
    $(".crystal-button").on("click", function () {
        currentScore = currentScore + parseInt($(this).attr("crystal-value"));
        $("#total-crystal").text("Total Collected: " + currentScore);

    if (currentScore === targetNumber) {
        winCount++
        $("#wins").text("Wins: " + winCount);
        reset();
    }
    
    else if (currentScore > targetNumber) {
        lossCount++
        $("#losses").text("Losses: " + lossCount);
        reset();
    }
    
    })

    

})



// $(document).ready(function button1() {

// var crystalNumber = Math.floor(Math.random() * 12) + 1;

// $("#button1").on("click", function() {

//    $(".crystal-button").attr("crystalvalue", crystalNumber);

//     console.log(crystalNumber);

// })

// })

// $(document).ready(function button2() {

// var crystalNumber = Math.floor(Math.random() * 12) + 1;

// $("#button2").on("click", function() {

//     $(".crystal-button").attr("crystalvalue", crystalNumber);

//     console.log(crystalNumber);
// })


// })

// $(document).ready(function button3() {

// var crystalNumber = Math.floor(Math.random() * 12) + 1;

// $("#button3").on("click", function() {

//     $(".crystal-button").attr("crystalvalue", crystalNumber);

//     console.log(crystalNumber);
// })


// })

// $(document).ready(function button4() {

//     var crystalNumber = Math.floor(Math.random() * 12) + 1;

//     $("#button4").on("click", function() {

//         $(".crystal-button").attr("crystalvalue", crystalNumber);
    
//         console.log(crystalNumber);
//     })

// })

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