//MOVEMENTS
var pressed = {}; //allows for listening for multiple keypresses so you can move diagnally

var Keys = {
  DOWN: 83,
  UP: 87,
  LEFT: 65,
  RIGHT: 68,
  SPACEBAR: 32
};

function setDirection(key) {
  var direction;
  if (key.keyCode == Keys.DOWN) {
    direction = Keys.DOWN;
  } else if (key.keyCode == Keys.UP) {
    direction = Keys.UP;
  } else if (key.keyCode == Keys.LEFT) {
    direction = Keys.LEFT;
  } else if (key.keyCode == Keys.RIGHT) {
    direction = Keys.RIGHT;
  } else if (key.keyCode == Keys.SPACEBAR) {
    direction = Keys.SPACEBAR;
  }
  return direction;
}

function addKeyToPressed(direction) {
  pressed[direction] = true;
}

function removeKeyFromPressed(key) {
  delete pressed[key];
}

//EVENT LISTENERS
addEventListener( "keydown", function(key) {
  var direction = setDirection(key);
  addKeyToPressed(direction);
});

addEventListener( "keyup", function(key) {
  var direction = setDirection(key);
  removeKeyFromPressed(direction);
});

