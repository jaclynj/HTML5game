//SETS ENEMY
function Enemy() {

  this.color = "#063FFF",
  this.x = 32 + (Math.random() * (canvasElement.width - 64)),
  this.y = -10,
  this.width = 20,
  this.height = 20,
  this.speed = 2,

  this.draw = function() {
    canvasContext.fillStyle = this.color;
    canvasContext.fillRect(this.x, this.y, this.width, this.height);
  },

  this.enemyMovement = function(){
    this.y += this.speed;
      //this resets enemy if it moves out of screen
    if (this.y > Game.canvas.height + this.height) {
      this.y = -100;
      this.x = 32 + (Math.random() * (Game.canvas.width - 64));
      Game.lives = Game.lives - 1;
    }
  };


}


