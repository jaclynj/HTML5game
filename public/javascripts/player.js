//MOVEMENTS

var pressed = {}; //allows for listening for multiple keypresses so you can move diagnally

function Keys(){
  this.DOWN = 83,
  this.UP = 87,
  this.LEFT = 65,
  this.RIGHT = 68,
  this.SPACEBAR = 32
}

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
  }
  return direction;
}

function addKeyToPressed(direction) {
  keys.pressed[direction] = true;
}

function removeKeyFromPressed() {
  delete keys.pressed[key.keyCode];
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
    canvasContext.fillStyle = this.color;
    canvasContext.beginPath(); //starts drawing
    canvasContext.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    //high point of circle, radius is width of circle,
    // 0 is start drawing and Math is the circumference, false just means dont draw in wrong direction
    canvasContext.closePath(); //ends drawing
    canvasContext.fill(); //fills it
  }
  move: function() {
    if (Keys.UP in pressed) {
      if (Game.player.y > Game.player.radius) {
        Game.player.y -= Game.player.speed;
      }
    } else if (Keys.DOWN in pressed) {
        if (Game.player.y < canvasElement.height - Game.player.radius) {
          Game.player.y += Game.player.speed;
        }
      }
    } else if  (Keys.LEFT in pressed)  {
      if (player.x > player.radius) {
        player.x -= player.speed;
      }
    } else if (Keys.RIGHT in pressed) {
      if (player.x < canvasElement.width - player.radius) {
        player.x += player.speed;
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

  //SHOOT BUTTON
  if (32 in keysDown) {
    player.shoot();
  }
  //PLAYER SHOOT
  player.shoot = function() {
    if (playerBullets.length < 1) {
      var bullet = new Bullet();
      playerBullets.push(bullet);
    }
  };
}

//SET PROJECTILE
var playerBullets = [];
function Bullet() {
  this.color = "#FFF360",
  this.x = player.x,
  this.y = player.y,
  this.width = 5,
  this.height = 8,
  this.speed = 15,
  this.range = 100,
  this.draw = function() {
    canvasContext.fillStyle = this.color;
    canvasContext.fillRect(this.x, this.y, this.width, this.height);
  }
}

//MOVES BULLET
function bulletMovement() {
  if (playerBullets.length > 0) {
    for(var i=0; i<playerBullets.length; i++) {
      var thisBullet = playerBullets[i];
      thisBullet.y -= thisBullet.speed;
    //this eliminates bullets that get out of range
      if (thisBullet.y < thisBullet.range) {
        playerBullets.splice(i, i+1);
        playerBullets.splice(3, playerBullets.length);
      }
    }
  }
}
