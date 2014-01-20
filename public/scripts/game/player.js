//SET PLAYER
Game.player = {
  color: "#FFF360",
  x: 300,
  y: 380,
  radius: 20,
  width: 20,
  height: 20,
  speed: 6,
  draw: function() {
    Game.context.fillStyle = this.color;
    Game.context.beginPath(); //starts drawing
    Game.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    //high point of circle, radius is width of circle,
    // 0 is start drawing and Math is the circumference, false just means dont draw in wrong direction
    Game.context.closePath(); //ends drawing
    Game.context.fill(); //fills it
  },
  move: function() {
    //SHOOT BUTTON
    if (Keys.SPACEBAR in pressed) {
      Game.player.shoot();
    }
    if (Keys.UP in pressed) {
      if (Game.player.y > Game.player.radius) {
        Game.player.y -= Game.player.speed;
      }
    } else if (Keys.DOWN in pressed) {
      if (Game.player.y < Game.canvas.height - Game.player.radius) {
        Game.player.y += Game.player.speed;
      }
    } else if (Keys.LEFT in pressed)  {
      if (Game.player.x > Game.player.radius) {
        Game.player.x -= Game.player.speed;
      }
    } else if (Keys.RIGHT in pressed) {
      if (Game.player.x < Game.canvas.width - Game.player.radius) {
        Game.player.x += Game.player.speed;
      }
    }
  }
};
