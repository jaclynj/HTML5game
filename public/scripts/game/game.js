var Game = Game || {};

//DEFINES THE CANVAS
Game.canvas = document.getElementById("myCanvas");
if (Game.canvas.getContext) {
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
  Game.bulletDetectCollision(); //detects if bullet hits enemy
  Game.enemyDetectCollision();
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
