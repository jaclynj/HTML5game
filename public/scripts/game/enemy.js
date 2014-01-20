//CREATE ENEMY
Game.enemy = function() {

  this.color = "#063FFF",
  this.x = 32 + (Math.random() * (Game.canvas.width - 64)),
  this.y = -10,
  this.width = 20,
  this.height = 20,
  this.speed = 2,
  this.draw = function() {
    Game.context.fillStyle = this.color;
    Game.context.fillRect(this.x, this.y, this.width, this.height);
  },
  this.movement = function(){
    this.y += this.speed;
      //this resets enemy if it moves out of screen
    if (this.y > Game.canvas.height + this.height) {
      this.y = -100;
      this.x = 32 + (Math.random() * (Game.canvas.width - 64));
      Game.lives = Game.lives - 1;
    }
  };
};

Game.resetEnemy = function(enemy){
  enemy.y = -100;
  enemy.x = 32 + (Math.random() * (Game.canvas.width - 64));
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

//DRAW ENEMIES
Game.drawEnemies = function() {
  for (var i=0; i<Game.enemies.length; i++) {
    var enemy = Game.enemies[i];
    enemy.draw();
  }
};

