//SET LIVES
Game.lives = 5;

//SET MENU
Game.menu = {
  draw: function(){
    Game.context.font="24px Helvetica";
    Game.context.fillText("Lives: "+Game.lives+" | Kills: "+Game.enemiesKilled, 15, 30);
  }
};

Game.gameStartScreen = function() {
  Game.context.fillStyle="#FFF360";
  Game.context.font="24px Helvetica";
  Game.context.fillText("Press [ENTER] to play",30,Game.canvas.height/2);
  if (Keys.ENTER in pressed) {
    Game.reset();
    Game.first_play = false;
  }
};

//LOSE CONDITIONS
Game.gameOverScreen = function() {
  Game.enemies = [];
  Game.context.font="24px Helvetica";
  Game.context.fillText("GAME OVER",80,Game.canvas.height/2);
  Game.context.font="18px Helvetica";
  Game.context.fillText("Your score was: " + Game.enemiesKilled,70, Game.canvas.height/1.8);
  Game.context.fillText("Press ENTER to play again",50, Game.canvas.height/1.7);
  if (Keys.ENTER in pressed) {
    Game.reset();
  }
};

//RESETS GAME
Game.reset =function() {
  Game.player.x = 138;
  Game.player.y = 460;
  Game.player.color = "#FFF360";
  Game.lives = 5;
  Game.enemiesKilled = 0;
  Game.setEnemies();
  Game.playMusic();
  Game.newGameEnemyReset();
};

Game.difficulty = function() {
  if (Game.enemiesKilled > 1 && Game.enemiesKilled % 6 === 0) {
    Game.speedUpEnemies();
  }
};
