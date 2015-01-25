//SET PLAYER

Game.player = {
  x: 150,
  y: 460,
  radius: 35,
  width: 43,
  height: 49,
  speed: 6,
  img: Game.createPlayerImage(),
  draw: function() {
    Game.context.drawImage(
      this.img,
      this.x - 18,
      this.y,
      this.width,
      this.height
    );
    Game.context.fill(); //fills it
  },
  move: function() {
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
