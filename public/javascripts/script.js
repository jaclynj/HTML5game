// TODO:
// enemies keep coming after you shoot them
// make lose conditions/health (if you get hit a certain amount of times the game resets)
// make win conditions (?) big boss?
// make enemies harder the further you get (faster enemies, more spawning)
// make score
// pause
// better graphics
// add music
// powerups



//DEFINES THE CANVAS
var canvasElement = document.getElementById("myCanvas");
if (canvasElement.getContext){
  var canvasContext = canvasElement.getContext("2d"); //this is the context, in this case, 2D
}
canvasElement.width = 600;
canvasElement.height = 450;

//FRAMES PER SECOND
var FPS = 60;
setInterval( function() { //setInterval is a function that calls update & draw
  update();
  draw();
}, 1000/FPS );


//MOVEMENTS
var keysDown = {}; //allows for listening for multiple keypresses so you can move diagnally

addEventListener( "keydown", function(key) {
  keysDown[key.keyCode] = true;
});

addEventListener( "keyup", function(key) {
  delete keysDown[key.keyCode];
});

// UPDATE
function update() {
  playerMovement();
  bulletMovement(); //moves bullets
  bulletDetectCollision(); //detects if bullet hits enemy
  enemyMovement();
  enemyDetectCollision();
}

//DRAW
function draw() {
  canvasContext.clearRect(0, 0, canvasElement.width, canvasElement.height);
  player.draw(); //runs draw function in player function
  enemy1.draw();
  enemy2.draw();

  //DRAWS BULLETS
  if (playerBullets.length > 0) {
    for(var i=0; i<playerBullets.length; i++) {
      playerBullets[i].draw();
    }
  }
}

//SET PLAYER
var player = {
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
};

//SET ENEMY
var enemy1 = new Enemy();
var enemy2 = new Enemy();

var enemies = [];

enemies.push(enemy1);
enemies.push(enemy2);

function Enemy() {
  this.color = "#063FFF",
  this.x = 32 + (Math.random() * (canvasElement.width - 64)),
  this.y = -10,
  this.width = 20,
  this.height = 20,
  this.speed = 2,
  this.draw = function() {
    canvasContext.fillStyle = this.color;
    canvasContext.fillRect(this.x, this.y, this.width, this.height);
  }
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

//IF BULLET TOUCHES ENEMY
var enemiesKilled = 0;

function bulletDetectCollision(thisBullet){
  for (var i=0; i<playerBullets.length; i++) {
    thisBullet = playerBullets[i];
    for (var i=0; i<enemies.length; i++) {
      enemy = enemies[i];
      if (
        thisBullet.x <= (enemy.x + 32)
        && enemy.x <= (thisBullet.x + 32)
        && thisBullet.y <= (enemy.y + 32)
        && enemy.y <= (thisBullet.y + 32)
        ) {
        enemy.y = -100;
        enemy.x = 32 + (Math.random() * (canvasElement.width - 64));
        enemiesKilled += 1;
        console.log(enemiesKilled);
      }
    }
  }
}

//PLAYER MOVEMENTS & PREVENTS PLAYER FROM MOVING OFF SCREEN
function playerMovement(){
  if (87 in keysDown) {
    if (player.y > player.radius) {
      player.y -= player.speed;
    }
  } else if ( 83 in keysDown ) {
    if (player.y < canvasElement.height - player.radius) {
      player.y += player.speed;
    }
  } else if ( 65 in keysDown ) {
    if (player.x > player.radius) {
      player.x -= player.speed;
    }
  } else if ( 68 in keysDown ) {
    if (player.x < canvasElement.width - player.radius) {
      player.x += player.speed;
    }
  }
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

//ENEMY MOVEMENT
function enemyMovement(){
  enemy2.y += enemy2.speed;
  enemy1.y += enemy1.speed;
}

//IF ENEMY & PLAYER TOUCH
function enemyDetectCollision() {
  for (var i=0; i<enemies.length; i++) {
    var enemy = enemies[i]
    if (
      player.x <= (enemy.x + 32)
      && enemy.x <= (player.x + 32)
      && player.y <= (enemy.y + 32)
      && enemy.y <= (player.y + 32)
      ) {
      player.color = "red";
    }
  }
}




// var player = {
//   color: "#FFF360",
//   x: 300,
//   y: 380,
//   draw: function() {
//     canvasContext.fillStyle = this.color;
//     canvasContext.beginPath(); //starts drawing
//     canvasContext.moveTo(this.x, this.y);
//     canvasContext.lineTo(160, 150);
//     canvasContext.lineTo(30, 150);
//     canvasContext.closePath(); //ends drawing
//     canvasContext.fill(); //fills it
//   }
// };


