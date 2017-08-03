//GLOBAL VARIABLES
//===============================


//Crystal Variables 
var crystal = {
	blue:
	{
		name: "Blue",
		value: 0 
	},

	green:
	{
		name: "Green",
		value: 0 
	},


	red:
	{
		name: "Red",
		value: 0 
	},

	yellow:
	{
		name: "Yellow",
		value: 0 
	}

};


//scores (current and Target)
var currentScore = 0;
var targetScore = 0;



// Wins and Losses 

var winCount = 0;
var lossCount = 0;


//FUNCTIONS 
//==============================
//Helper Function for getting random numbers
var getRandom = function(min,max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
//Starts the game(and restarts the game)  
var startGame = function() {
	//reset the current score
	currentScore = 0;

	//set a new target score (between 19 and 120)

	targetScore = getRandom(19, 120); 
	//set different values for each of the crystals (between 1 and 12)

	crystal.blue.value 		= getRandom(1, 12);
	crystal.red.value 		= getRandom(1, 12);
	crystal.green.value 	= getRandom(1, 12);
	crystal.yellow.value 	= getRandom(1, 12);

	//Change the HTML to reflect all of these changes 
	$("#yourScore").html(currentScore);
	$("#targetScore").html(targetScore);




	//testing console
	console.log("-----------------")
	console.log("Target Score: " + targetScore);
	console.log("Blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Red: " + crystal.red.value + " | Yellow: " + crystal.yellow.value);
}

//Respond to the click on the crystals
var addValues = function (crystal) { 


//Change currentScore
	currentScore = currentScore + crystal.value;


//Change the HTML to reflect changes in the currentScore
	$("#yourScore").html(currentScore);


//Call the checkWin Function 
	checkWin();	

	//testing console
	console.log("Your Score: " + currentScore);

}

// Check if user won or lost and reset the game
var checkWin = function() {

// Check if currentScore is larger than targetScore
	if(currentScore > targetScore){
		alert("Sorry, You Lost!!!");
		console.log("You Lost");

//Add to Loss Counter

	lossCount++;		

 // Change Loss Count HTML
    $("#loss-count").html(lossCount);

//Restart the game
	startGame();
    

	}
	else if (currentScore == targetScore) {
		alert("Congratulations!!! You Won!!");
		console.log("You Won!");

//Add to the Win Counter 
	winCount++;

	//Change Win Count HTML
	$("#winCount").html(winCount);

//Restart the game
	startGame();


	}

}

//MAIN PROCESS 
//=================

//starts the game the first time 
startGame(); 

$("#blue").click(function() {
	
	addValues(crystal.blue);


});

$("#red").click(function() {
	addValues(crystal.red);

});

$("#green").click(function() {
	addValues(crystal.green);

});

$("#yellow").click(function() {
	addValues(crystal.yellow);

});
	
