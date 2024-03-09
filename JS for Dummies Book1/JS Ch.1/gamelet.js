/*

Gamelet: a starting point for writing games.
Author: Chris Minnick
Version: 1.0

Instructions:
Include gamelet.js in an HTML document containing an element with an id of 'ball'.
The script will detect when the left or right arrow key is pressed amd will move the ball element accordingly.

*/

const ball = document.getElementById("ball"); // get the ball
document.addEventListener(`keydown`, handleKeyPress); // listen for keys
let positionX = 0; // set initial position
let positionY = 0; // set initial position

/* 
handleKeyPress
Responds to certain key presses by updating the position.
*/
function handleKeyPress(e) {
  if (e.code === `ArrowLeft`) {
    positionX = positionX - 10;
  }
  if (e.code === `ArrowRight`) {
    positionX = positionX + 10;
  }
  if (e.code === `ArrowUp`) {
    positionY = positionY - 10;
  }
  if (e.code === `ArrowDown`) {
    positionY = positionY + 10;
  }
  if (positionX < 0) {
    positionX = 0;
  }
  if (positionY < 0) {
    positionY = 0;
  }
  refreshX();
  refreshY();
}

/*
refresh
changes the position of the ball
*/
function refreshX() {
  ball.style.left = positionX + `px`;
}
function refreshY() {
  ball.style.top = positionY + `px`;
}
