// Refactor
// Is it colliding?
  // if it is, then move it somewhere

  // for (bullet in bullets)
  //   if enemy.isCollided(bullet) {
  //     enemy.reset()
  //   }
  // end
//
function bulletDetectCollision(){
  for (var i=0; i<Game.playerBullets.length; i++) {
    var thisBullet = Game.playerBullets[i];
    for (var i=0; i<Game.enemies.length; i++) {
      var enemy = Game.enemies[i];
      if (
        thisBullet.x <= (enemy.x + 32) &&
        enemy.x <= (thisBullet.x + 32)
        && thisBullet.y <= (enemy.y + 32)
        && enemy.y <= (thisBullet.y + 32)
        ) {
        Game.resetEnemy(enemy);
        Game.enemiesKilled += 1;
      }
    }
  }
}


//IF ENEMY & PLAYER TOUCH
function enemyDetectCollision() {
  for (var i=0; i<Game.enemies.length; i++) {
    var enemy = Game.enemies[i];
    if (
      Game.player.x <= (enemy.x + 32)
      && enemy.x <= (Game.player.x + 32)
      && Game.player.y <= (enemy.y + 32)
      && enemy.y <= (Game.player.y + 32)
      ) {
      Game.resetEnemy(enemy);
      Game.lives = Game.lives - 1;
      Game.player.color = "red";
    }
  }
}
