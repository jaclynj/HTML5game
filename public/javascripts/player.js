//MOVEMENTS
console.log("in the player fn");
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

//PLAYER MOVEMENTS & PREVENTS PLAYER FROM MOVING OFF SCREEN

/*

player.move(LEFT)

function updatePlayerMovement(){
TODO
  // keys.pressed("Down")
  // keys.pressed(Keys.DOWN)

  if (keys.pressed("Down")) {
    if (player.y > player.radius) {
      player.move(DOWN)
    }

*/

//SET PLAYER
Game.lives = 5;
Game.player = {
  color: "#FFF360",
  x: 300,
  y: 380,
  radius: 20,
  width: 20,
  height: 20,
  speed: 6,
  draw: function() {
    Game.context.fillStyle = this.color;
    Game.context.beginPath(); //starts drawing
    Game.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    //high point of circle, radius is width of circle,
    // 0 is start drawing and Math is the circumference, false just means dont draw in wrong direction
    Game.context.closePath(); //ends drawing
    Game.context.fill(); //fills it
  },
  move: function() {
    //SHOOT BUTTON
    if (Keys.SPACEBAR in pressed) {
      Game.player.shoot();
    }
    if (Keys.UP in pressed) {
      if (Game.player.y > Game.player.radius) {
        Game.player.y -= Game.player.speed;
      }
    } else if (Keys.DOWN in pressed) {
      if (Game.player.y < Game.canvas.height - Game.player.radius) {
        Game.player.y += Game.player.speed;
      }
    } else if (Keys.LEFT in pressed)  {
      if (Game.player.x > Game.player.radius) {
        Game.player.x -= Game.player.speed;
      }
    } else if (Keys.RIGHT in pressed) {
      if (Game.player.x < Game.canvas.width - Game.player.radius) {
        Game.player.x += Game.player.speed;
      }
    }
  }
};

// function playerMovement(){
//   if (87 in keysDown) {
//     if (player.y > player.radius) {
//       player.y -= player.speed;
//     }
//   } else if ( 83 in keysDown ) {
//     if (player.y < canvasElement.height - player.radius) {
//       player.y += player.speed;
//     }
//   } else if ( 65 in keysDown ) {
//     if (player.x > player.radius) {
//       player.x -= player.speed;
//     }
//   } else if ( 68 in keysDown ) {
//     if (player.x < canvasElement.width - player.radius) {
//       player.x += player.speed;
//     }
//   }

//keys.DIRECTION takes care of the keybinding
//maybe an easier way
//keys.direction = #
//if


//PLAYER SHOOT
Game.player.shoot = function() {
  if (Game.playerBullets.length < 1) {
    var bullet = new Game.bullet();
    Game.playerBullets.push(Game.bullet);
  }
};

//SET PROJECTILE
Game.playerBullets = [];

Game.bullet = function() {
  this.color = "#FFF360",
  this.x = Game.player.x,
  this.y = Game.player.y,
  this.width = 5,
  this.height = 8,
  this.speed = 15,
  this.range = 100,
  this.draw = function() {
    Game.context.fillStyle = this.color;
    Game.context.fillRect(this.x, this.y, this.width, this.height);
  }
};

//MOVES BULLET
Game.bulletMovement = function() {
  if (Game.playerBullets.length > 0) {
    for(var i=0; i<Game.playerBullets.length; i++) {
      var thisBullet = Game.playerBullets[i];
      thisBullet.y -= thisBullet.speed;
    //this eliminates bullets that get out of range
      if (thisBullet.y < thisBullet.range) {
        Game.playerBullets.splice(i, i+1);
        Game.playerBullets.splice(3, Game.playerBullets.length);
      }
    }
  }
};
