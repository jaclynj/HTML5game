//CREATE ENEMY
Game.enemy = function() {

  this.color = "#063FFF",
  this.x = 32 + (Math.random() * (Game.canvas.width - 64)),
  this.y = -10,
  this.width = 40,
  this.height = 40,
  this.speed = 2,
  this.asteroidNumber = 0,
  this.asteroidRun = 0,
  this.draw = function() {

    Game.context.drawImage(
      Game.createAsteroid( this.asteroidNumber ),
      this.x - 18,
      this.y,
      this.width,
      this.height
    );
    Game.context.fill();
    this.asteroidRun++;

    if ( this.asteroidNumber < 15 && this.asteroidRun > (this.speed) ) {
      this.asteroidNumber++;
      this.asteroidRun = 0;
    } else if ( this.asteroidNumber >= 15) {
      this.asteroidNumber = 0;
      this.asteroidRun = 0;
    }

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

Game.newGameEnemyReset = function() {
  for (var i=0; i<Game.enemies.length; i++) {
    var enemy = Game.enemies[i];
    enemy.speed = 2;
    Game.resetEnemy(enemy);
  }
};

Game.speedUpEnemies = function() {
  for (var i=0; i<Game.enemies.length; i++) {
    var enemy = Game.enemies[i];
    enemy.speed += 1;
  }
};

// SET ENEMIES
  Game.enemies = [];
  Game.enemiesKilled = 0;

//SET ENEMY
Game.setEnemies = function() {
  Game.enemy1 = new Game.enemy();
  Game.enemy2 = new Game.enemy();

  Game.enemies.push(Game.enemy1);
  Game.enemies.push(Game.enemy2);
};

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

