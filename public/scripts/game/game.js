var Game = Game || {};

//DEFINES THE CANVAS
Game.canvas = document.getElementById("myCanvas");
if (Game.canvas.getContext){
Game.context = Game.canvas.getContext("2d"); //this is the context, in this case, 2D
}
Game.canvas.width = 600;
Game.canvas.height = 550;

//FRAMES PER SECOND
Game.FPS = 60;
//setInterval is a function that calls update & draw
setInterval( function() {
  Game.update();
  Game.draw();
}, 1000/Game.FPS );


// UPDATE
Game.update = function() {
  Game.player.move();
  Game.enemy1.movement();
  Game.enemy2.movement();
  Game.bulletMovement(); //moves bullets
  bulletDetectCollision(); //detects if bullet hits enemy
  // Game.enemy.movement();
  enemyDetectCollision();
};

//DRAW
Game.draw = function() {
  Game.context.clearRect(0, 0, Game.canvas.width, Game.canvas.height);

  //if player loses
  if (Game.lives < 1) {
  Game.menu.loseConditions();
  // else render the game normally
  } else {
    Game.menu.draw();
    Game.player.draw();
    Game.enemy1.draw();
    Game.enemy2.draw();

    //DRAWS BULLETS
    for(var i=0; i<Game.playerBullets.length; i++) {
      var thisBullet = Game.playerBullets[i];
      thisBullet.draw();
    }
  }
};

// * FUNCTIONS & VARIABLES THAT SET OBJECTS *

//SET MENU

Game.menu = {
  draw: function(){
    Game.context.font="24px Helvetica";
    Game.context.fillStyle="#063FFF";
    Game.context.fillText("Lives: "+Game.lives+" | Kills: "+Game.enemiesKilled, 15, 30);
  }
};

//* GAME UPDATE FUNCTIONS *

//LOSE CONDITIONS

Game.menu.loseConditions = function() {
  Game.context.font="24px Helvetica";
  Game.context.fillText("GAME OVER",230,Game.canvas.height/2);
  Game.context.font="18px Helvetica";
  Game.context.fillText("Press space to play again",200, Game.canvas.height/1.8);
  if (Keys.SPACEBAR in pressed) {
    Game.reset();
  }
};

// SET ENEMIES
Game.enemies = [];

