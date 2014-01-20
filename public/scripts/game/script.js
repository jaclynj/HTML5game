Game.enemiesKilled = 0;

//SET ENEMY

Game.enemy1 = new Game.enemy();
Game.enemy2 = new Game.enemy();

Game.enemies.push(Game.enemy1);
Game.enemies.push(Game.enemy2);
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
