// game win/loss count
var winCount = 0;
var lossCount = 0;
var gameOver = false;

// creates variables that references HTML
var ruby = $("#ruby"); 
var emr = $("#emerald"); 
var sap = $("#sapphire"); 
var amyt = $("#amethyst");

// Variables to store Gems Value
var rubyValue;
var emValue;
var sapValue;
var amethyst;

// creat variable for computer guess to be input too
var compChoice;

//create variable to store the players total from gem presses
var currentTotal;
var currentScore = $("#total-guess");

// game loops (to be called upon later)
//
// give values to rubies and selects a number to guess
function gameInit () {
    //clears game board
    currentTotal = 0;
    currentScore.text(currentTotal);

    // Generates a random number to guess, rounds it to the nearest Int, and then displays it on the page
    compChoice = parseInt(Math.random() * (120 - 12) + 12);
        console.log("number to guess: " + compChoice);
        $("#computer-guess").text("number to guess: " + compChoice);

    // generate random value for gems 1-12, rounds it to nearest int, then attaches it to the correct gem
    rubyValue = parseInt(Math.random() * (12 - 1) + 1);
     console.log("ruby value " + rubyValue);
      
    emValue = parseInt(Math.random() * (12 - 1) + 1);
     console.log( "emerald value " + emValue);
     
    sapValue = parseInt(Math.random() * (12 - 1) + 1);
     console.log("sapphire value " + sapValue);
     
    amytValue = parseInt(Math.random() * (12 - 1) + 1);
     console.log("amythest value " + amytValue);
};

console.log("number to guess out of function: " + compChoice);

function gameLoop () {
    $(ruby).on("click", function() {
        currentTotal = currentTotal + rubyValue;
        $("#total-guess").text(currentTotal);
        console.log("current player total: " + currentTotal);
    })

    $(emr).on("click", function() {
        currentTotal = currentTotal + emValue;
        $("#total-guess").text(currentTotal);
        console.log("current player total: " + currentTotal);
    })


    $(sap).on("click", function() {
        currentTotal = currentTotal + sapValue;
        $("#total-guess").text(currentTotal);
        console.log("current player total: " + currentTotal);
    })

    $(amyt).on("click", function() {
        currentTotal = currentTotal + amytValue;
        $("#total-guess").text(currentTotal);
        console.log("current player total: " + currentTotal);
    })
        console.log("current player total outside function: " + currentTotal);

        if (currentTotal === compChoice) {
            alert ("You Win!");
            winCount++;
            $("#player-wins").text("winCount");
            gameOver = true;
        }
        if (currentTotal > compChoice) {
            alert ("You Lose!");
            lossCount++;
            $("#player-losses").text(lossCount);
            gameOver = true;
        }
    
};


gameInit();
gameLoop();

if (gameOver === true) {
 function gameReset () {
  
 };
}

