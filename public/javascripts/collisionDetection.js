// Refactor
// Is it colliding?
  // if it is, then move it somewhere

  // for (bullet in bullets)
  //   if enemy.isCollided(bullet) {
  //     enemy.reset()
  //   }
  // end
//
function bulletDetectCollision(thisBullet){
  for (var i=0; i<playerBullets.length; i++) {
    thisBullet = playerBullets[i];
    for (var i=0; i<enemies.length; i++) {
      var enemy = enemies[i];
      if (
        thisBullet.x <= (enemy.x + 32) &&
        enemy.x <= (thisBullet.x + 32)
        && thisBullet.y <= (enemy.y + 32)
        && enemy.y <= (thisBullet.y + 32)
        ) {
        enemy.y = -100; // This is separate from the collision
        enemy.x = 32 + (Math.random() * (canvasElement.width - 64));
        enemiesKilled += 1;
        console.log(enemiesKilled);
      }
    }
  }
}


//IF ENEMY & PLAYER TOUCH
function enemyDetectCollision() {
  for (var i=0; i<enemies.length; i++) {
    var enemy = enemies[i];
    if (
      player.x <= (enemy.x + 32)
      && enemy.x <= (player.x + 32)
      && player.y <= (enemy.y + 32)
      && enemy.y <= (player.y + 32)
      ) {
      enemy.y = -100;
      enemy.x = 32 + (Math.random() * (canvasElement.width - 64));
      lives = lives - 1;
      player.color = "red";
      console.log(lives);
    }
  }
}
