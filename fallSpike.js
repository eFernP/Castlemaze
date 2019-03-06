'use strict';

class FallSpike {
    constructor(level, canvas, x, y, speed){
      this.level = level;
      this.canvas = canvas;
      this.context = this.canvas.getContext('2d');
      this.x = x;
      this.y = y;
      this.sizeX = 10;
      this.sizeY = 20;
      this.speed = speed;
      this.direction = 1;
  };

  update(){
    this.y = this.y + this.speed;
  };

  draw(){
    const img = new Image();
    img.src = "img/fall-spike.png";
    this.context.drawImage(img, this.x-this.sizeX/2, this.y-this.sizeY/2, this.sizeX, this.sizeY);
  }
}
