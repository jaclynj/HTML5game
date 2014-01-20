//PLAYER SHOOT
Game.player.shoot = function() {
  if (Game.playerBullets.length < 1 ) {
    var bullet = new Game.bullet();
    Game.playerBullets.push(bullet);
  }
};

//SET PROJECTILE
Game.playerBullets = [];

Game.bullet = function() {
  this.color = "#FFF360",
  this.x = Game.player.x,
  this.y = Game.player.y,
  this.width = 5,
  this.height = 8,
  this.speed = 18,
  this.range = 100,
  this.draw = function() {
    Game.context.fillStyle = this.color;
    Game.context.fillRect(this.x, this.y, this.width, this.height);
  };
};

//MOVES BULLET
Game.bulletMovement = function() {
  if (Game.playerBullets.length > 0) {
    for(var i=0; i<Game.playerBullets.length; i++) {
      var thisBullet = Game.playerBullets[i];
      thisBullet.y -= thisBullet.speed;
    //this eliminates bullets that get out of range
      if (thisBullet.y <= thisBullet.range) {
        Game.playerBullets.splice(i, i+1);
      }
    }
  }
};
