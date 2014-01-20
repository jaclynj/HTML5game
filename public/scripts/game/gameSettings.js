//SET LIVES
Game.lives = 5;

//SET MENU
Game.menu = {
  draw: function(){
    Game.context.font="24px Helvetica";
    Game.context.fillStyle="#063FFF";
    Game.context.fillText("Lives: "+Game.lives+" | Kills: "+Game.enemiesKilled, 15, 30);
  }
};

//LOSE CONDITIONS
Game.gameOverScreen = function() {
  Game.context.font="24px Helvetica";
  Game.context.fillText("GAME OVER",230,Game.canvas.height/2);
  Game.context.font="18px Helvetica";
  Game.context.fillText("Press space to play again",200, Game.canvas.height/1.8);
  if (Keys.SPACEBAR in pressed) {
    Game.reset();
  }
};

//RESETS GAME
Game.reset =function() {
  Game.player.x = 300;
  Game.player.y = 380;
  Game.player.color = "#FFF360";
  Game.lives = 5;
  Game.enemiesKilled = 0;
  Game.newGameEnemyReset();
};

Game.difficulty = function() {
  if (Game.enemiesKilled > 1 && Game.enemiesKilled % 6 === 0) {
    Game.speedUpEnemies();
  }
};
