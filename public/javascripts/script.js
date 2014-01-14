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
  enemy1.y = -100;
  enemy1.x = 32 + (Math.random() * (canvasElement.width - 64));
  enemy2.y = -100;
  enemy2.x = 32 + (Math.random() * (canvasElement.width - 64));
  enemies = [];
  enemies.push(enemy1);
  enemies.push(enemy2);
};
