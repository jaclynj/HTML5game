//SET MENU
Game.lives = 5;

Game.menu = {
  draw: function(){
    Game.context.font="24px Helvetica";
    Game.context.fillStyle="#063FFF";
    Game.context.fillText("Lives: "+Game.lives+" | Kills: "+Game.enemiesKilled, 15, 30);
  }
};

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
Game.enemiesKilled = 0;

//SET ENEMY
Game.enemy1 = new Game.enemy();
Game.enemy2 = new Game.enemy();

Game.enemies.push(Game.enemy1);
Game.enemies.push(Game.enemy2);

//MOVE ENEMIES
Game.enemyMovement = function() {
  for (var i=0; i<Game.enemies.length; i++) {
    var enemy = Game.enemies[i];
    enemy.movement();
  }
};

Game.drawEnemies = function() {
  for (var i=0; i<Game.enemies.length; i++) {
    var enemy = Game.enemies[i];
    enemy.draw();
  }
}

//RESETS GAME
Game.reset =function() {
  Game.player.x = 300;
  Game.player.y = 380;
  Game.player.color = "#FFF360";
  Game.lives = 5;
  Game.enemiesKilled = 0;
  Game.resetEnemy(Game.enemy1);
  Game.resetEnemy(Game.enemy2);
  enemies = [];
  enemies.push(Game.enemy1);
  enemies.push(Game.enemy2);
};
