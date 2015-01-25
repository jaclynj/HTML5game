Game.collision = function(obj1, obj2) {
  if ( obj1.x <= (obj2.x + 32)
    && obj2.x <= (obj1.x + 32)
    && obj1.y <= (obj2.y + 22)
    && obj2.y <= (obj1.y + 22)
    ){
    return true;
  } else {
    return false;
  }
};

//IF PLAYER & BULLET TOUCH
Game.bulletDetectCollision = function(){
  for (var i=0; i<Game.playerBullets.length; i++) {
    var thisBullet = Game.playerBullets[i];
    for (var i=0; i<Game.enemies.length; i++) {
      var enemy = Game.enemies[i];
      if ( Game.collision(thisBullet, enemy) ) {
        Game.resetEnemy(enemy);
        Game.enemiesKilled += 1;
        Game.difficulty();
      }
    }
  }
};

//IF ENEMY & PLAYER TOUCH
Game.enemyDetectCollision = function() {
  for (var i=0; i<Game.enemies.length; i++) {
    var enemy = Game.enemies[i];
    if ( Game.collision(Game.player, enemy) ) {
      Game.resetEnemy(enemy);
      Game.lives = Game.lives - 1;
    }
  }
}
