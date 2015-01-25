//MOVEMENTS
var pressed = {}; //allows for listening for multiple keypresses so you can move diagnally

var Keys = {
  DOWN: 83,
  UP: 87,
  LEFT: 65,
  RIGHT: 68,
  SPACEBAR: 32,
  ENTER: 13
};

Game.setDirection = function(key) {
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
  } else if (key.keyCode == Keys.ENTER) {
    direction = Keys.ENTER;
  }
  return direction;
};

Game.addKeyToPressed = function(direction) {
  pressed[direction] = true;
};

Game.removeKeyFromPressed = function(key) {
  delete pressed[key];
};

//EVENT LISTENERS
addEventListener( "keydown", function(key) {
  var direction = Game.setDirection(key);
  Game.addKeyToPressed(direction);
});

addEventListener( "keyup", function(key) {
  var direction = Game.setDirection(key);
  Game.removeKeyFromPressed(direction);
});

