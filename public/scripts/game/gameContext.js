var Game = Game || {};

//DEFINES THE CANVAS
Game.canvas = document.getElementById("myCanvas");

//AUDIO
Game.music = document.getElementById("backgroundMusic");

//SETS THE CONTEXT
if (Game.canvas.getContext) {
  Game.context = Game.canvas.getContext("2d"); //this is the context, in this case, 2D
}

//SETS WIDTH AND HEIGHT
Game.canvas.width = 300;
Game.canvas.height = 550;

//FRAMES PER SECOND
Game.FPS = 60;
Game.first_play = true;

//IMAGES
Game.createPlayerImage = function() {
  var img = new Image();
  img.src = "public/images/spaceship.png";
  return img;
};

Game.createAsteroid = function(number) {
  var img = new Image();
  var source;
  if ( number < 10 ) {
    source = "public/images/a1000";
  } else {
    source = "public/images/a100";
  }
  img.src = source + number + ".png";
  return img;
};

//SETS HOW OFTEN UPDATE AND DRAW ARE CALLED PER SECOND
setInterval( function() {
  Game.update();
  Game.draw();
}, 1000/Game.FPS );


// UPDATE
Game.update = function() {
  Game.player.move();
  Game.enemyMovement();
  Game.bulletMovement(); //moves bullets
  Game.bulletDetectCollision(); //detects if bullet hits enemy
  Game.enemyDetectCollision();
};

//DRAW
Game.draw = function() {
  Game.context.clearRect(0, 0, Game.canvas.width, Game.canvas.height);

  //START GAME
  if (Game.first_play) {
    Game.gameStartScreen();
    //IF PLAYER HAS LIVES
  } else if (Game.lives >= 1) {
    Game.menu.draw();
    Game.player.draw();
    Game.drawEnemies();
    Game.drawBullets();
    Game.playMusic();
  // ELSE SHOW GAME OVER
  } else {
    Game.gameOverScreen();
    Game.pauseMusic();
  }
};

//PLAY MUSIC

Game.playMusic = function() {
  Game.music.play();
};

Game.pauseMusic = function() {
  Game.music.pause();
};
