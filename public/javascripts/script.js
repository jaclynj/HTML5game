var Game = Game || {};

//DEFINES THE CANVAS
Game.canvas = document.getElementById("myCanvas");
if (Game.canvas.getContext){
Game.context = Game.canvas.getContext("2d"); //this is the context, in this case, 2D
}
Game.canvas.width = 600;
Game.canvas.height = 450;

//FRAMES PER SECOND
Game.FPS = 60;
//setInterval is a function that calls update & draw
setInterval( function() {
  update();
  draw();
}, 1000/Game.FPS );


// UPDATE
Game.update = function() {
  playerMovement();
  bulletMovement(); //moves bullets
  bulletDetectCollision(); //detects if bullet hits enemy
  enemyMovement();
  enemyDetectCollision();
} // TODO main.js

//DRAW
Game.draw = function() {
  canvasContext.clearRect(0, 0, canvasElement.width, canvasElement.height);

  //if player loses
  if (lives < 1) {
  loseConditions();
  // else render the game normally
  } else {
    menu.draw();
    player.draw();
    enemy1.draw();
    enemy2.draw();

    //DRAWS BULLETS
    for(var i=0; i<playerBullets.length; i++) {
      playerBullets[i].draw();
    }
  }
}

// * FUNCTIONS & VARIABLES THAT SET OBJECTS *

//SET MENU

Game.menu = {
  draw: function(){
    canvasContext.font="24px Helvetica";
    canvasContext.fillStyle="#063FFF";
    canvasContext.fillText("Lives: "+lives+" | Kills: "+enemiesKilled, 15, 30);
  }
};

//SET ENEMY

Game.enemy1 = new Enemy();
Game.enemy2 = new Enemy();

Game.enemies = [];

Game.enemies.push(enemy1);
Game.enemies.push(enemy2);

//* GAME UPDATE FUNCTIONS *

//LOSE CONDITIONS

Menu.prototype.loseConditions = function() {
  Game.context.font="24px Helvetica";
  Game.context.fillText("GAME OVER",230,canvasElement.height/2);
  Game.context.font="18px Helvetica";
  Game.context.fillText("Press space to play again",200,canvasElement.height/1.8);
  if (32 in keysDown) {
    reset();
  }
}

//RESETS GAME

Game.prototype.reset =function() {
  Game.player.x = 300;
  Game.player.y = 380;
  Game.player.color = "#FFF360";
  Game.lives = 5;
  Game.enemiesKilled = 0;
  enemy1.y = -100;
  enemy1.x = 32 + (Math.random() * (canvasElement.width - 64));
  enemy2.y = -100;
  enemy2.x = 32 + (Math.random() * (canvasElement.width - 64));
  enemies = [];
  enemies.push(enemy1);
  enemies.push(enemy2);
}

//IF BULLET TOUCHES ENEMY
Game.enemiesKilled = 0;


