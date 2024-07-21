// Displaying a menu

var displayMenu;

displayMenu = function () {
	console.log("Please choose an option:");
	console.log("(1) Print log");
	console.log("(2) Upload file");
	console.log("(3) Delete item"); // Step 1
	console.log("(4) View settings"); // Step 1
	console.log("(9) Quit");
};

displayMenu();

// Step 2: Create your own displayMyMenu function
var displayMyMenu = function () {
	console.log("Welcome to My Adventure Menu:");
	console.log("(1) Begin Journey");
	console.log("(2) Continue Adventure");
	console.log("(3) Save Progress");
	console.log("(4) Settings");
	console.log("(5) Exit Game");
};


// Step 3: Call your function and run the program
displayMyMenu();
