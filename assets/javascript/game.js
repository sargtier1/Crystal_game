// game win/loss count + gameOver parameter set to false
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
var amytValue;

// creat variable for computer guess to be input too
var compChoice;

//create variable to store the players total from gem values
var currentTotal;
var currentScore = $("#total-guess");
   
// this game init function starts the game. It greats displays the game data generated for user, and console
function gameInit () {
    //clears player totals from previous sessions.
    currentTotal = 0;

    currentScore.text("current player total: " + currentTotal);

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


// this function will take data from on click and dynamically update the game board. It will pass gem value into player total.
function gameLoop () {

    // this function will display, and link the data from click to a diff fucntion to see if the game is over
    function displayCurrentTotal () {
        $("#total-guess").text("current player total: " + currentTotal);
        console.log("current player total: " + currentTotal);
        Eval ();
    };
    
    $(ruby).on("click", function () {
        currentTotal += rubyValue
        displayCurrentTotal();
    })

    $(emr).on("click", function() {
        currentTotal += emValue;
        displayCurrentTotal();
    })

    $(sap).on("click", function() {
        currentTotal += sapValue;
        displayCurrentTotal();
    })

    $(amyt).on("click", function() {
        currentTotal += amytValue;
        displayCurrentTotal();
    })
};

// This function checks to see if the game is over or not. It is apart of the display current total functio
function Eval () {
    if (currentTotal === compChoice) {
        alert ("You Win!");
        winCount++;
        $("#player-wins").text(winCount);
        gameOver = true;
    }
    if (compChoice < currentTotal) {
        alert ("You Lose!");
        lossCount++;
        $("#player-losses").text(lossCount);
        gameOver = true;
    }

    // this will set a boolean value that when triggered resets the game, by triggering a fucntion
    if (gameOver === true) {
        gameReset ();
       }
};

 // game reset function, 
function gameReset () {
    console.log("-------- New Game --------");
    gameOver = false;
    gameInit();
};

// calls the function the first time so the game can start. 
gameInit();
gameLoop();

