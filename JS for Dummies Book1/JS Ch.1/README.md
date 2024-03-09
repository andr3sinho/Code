# Gamelet

A starter program for writing Java-Script games.

## Usage

1. Include gamelet.js in an HTML document containing an element with an id of 'ball'.

```html
<div id="ball">@</div>
<script src="gamelet.js" />
```

2. The script will detect when the left or right arrow keys are pressed and will move the ball element accordingly.

```JavaScript
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
```
