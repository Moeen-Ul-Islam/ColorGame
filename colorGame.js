var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var rgb = document.querySelector("#rgb");
var messageDisplay = document.querySelector("#messageDisplay");
var pickedColor = pickColor();
var body = document.querySelector("body");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
rgb.textContent = pickedColor;

// easyBtn color selection
easyBtn.addEventListener("click", function() {
  this.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  rgb.textContent = pickedColor;

  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

// hardBtn color selection
hardBtn.addEventListener("click", function() {
  this.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  rgb.textContent = pickedColor;

  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});

// reset button
resetBtn.addEventListener("click", function() {
  // generating 6 new colors
  colors = generateRandomColors(numSquares);
  // picking new random color from color[]
  pickedColor = pickColor();
  // show new color
  rgb.textContent = pickedColor;
  // Changing the colors of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelBlue";
  messageDisplay.textContent = "";
  this.textContent = "New colors";
});

for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];

  // adding event
  squares[i].addEventListener("click", function() {
    // Grabbing the clicked color
    var clickedColor = this.style.backgroundColor;

    if (pickedColor === clickedColor) {
      messageDisplay.classList.remove("red");
      messageDisplay.classList.add("green");
      messageDisplay.textContent = "Bravo!";
      h1.style.backgroundColor = "steelBlue";
      correctColor(clickedColor);
      resetBtn.textContent = "Play Again!";
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.classList.remove("green");
      messageDisplay.classList.add("red");
      messageDisplay.textContent = "Oops!";
    }
  });
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];

  // Loop for pushing random colors into array
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

// function for generating random color for generateRandomColor();
function randomColor() {
  // for red 0-255
  var r = Math.floor(Math.random() * 256);
  // for green 0-255
  var g = Math.floor(Math.random() * 256);
  // for blue 0-255
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}

// function for changing the color of all the squares
function correctColor(clicked) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = clicked;
  }
}
