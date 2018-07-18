var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".Square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#messageDisplay");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click",function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
});

hardBtn.addEventListener("click",function() {
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
});

reset.addEventListener("click",function() {
	//generate all new colors
	//pick a new random color from the array
	//change the colors of the squares on the page
	//change colorDisplay to match picked color
	colors = generateRandomColors(6);
	pickedColor= pickColor();
	colorDisplay.textContent=pickedColor;

	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="#232323";
});

for (var i = 0; i <squares.length; i++) {
	//Add initial colors to squares
	squares[i].style.backgroundColor= colors[i];
	//add click listeners to squares
	squares[i].addEventListener("click",function() {
		var clickedColor = this.style.backgroundColor;
		if (clickedColor===pickedColor) {
			messageDisplay.textContent='Correct!';
			changeColor(clickedColor);		
			reset.textContent='Play Again?';
			h1.style.backgroundColor = clickedColor;		
		}
		else {
			this.style.background = "#232323";
			messageDisplay.textContent='Try again';

		}
	});
}

function changeColor(color) {
	//loop through all squares
	//change their colors
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function pickColor() {
	// body...
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	
	//add num random colors to the array
	//return the array
	// make an array
	var arr=[]
	for (var i = 0; i < num; i++) {
		//generate random colors and push them into the array
		arr.push(randomColor());
	}

	return arr;
}

function randomColor() {
	// body...
	//using 0-255 for red
	var r = Math.floor(Math.random()*256);
	//using 0-255 for green
	//using 0-255 for blue
	var g = Math.floor(Math.random()*256);//green
	var b = Math.floor(Math.random()*256);//blue
	//"rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}