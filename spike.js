'use strict';

class Spike{

  constructor(level, canvas, x, y, position){
    this.level = level;
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.x = x;
    this.y = y;
    this.sizeX = 10;
    this.sizeY = 75;
    this.speed = 20;
    this.position = position;
    this.direction = 1;
  }


  update(){

    if (this.position === "bottom"){
      this.y = this.y-this.speed*this.direction;
      
      if (this.y+this.sizeY/2 <= this.canvas.height+20){
        this.direction = -1; 
        this.speed = 1;
      }else if (this.y-this.sizeY/2 > this.canvas.height+60){
        this.direction = 1;
        this.speed = 20;
      }
    }

  }

  draw(){
    // this.context.fillStyle = "gray";
    // this.context.fillRect(this.x-this.sizeX/2, this.y-this.sizeY/2, this.sizeX, this.sizeY);

    const img = new Image();
    img.src = "img/spike2.png";
    this.context.drawImage(img, this.x-this.sizeX/2, this.y-this.sizeY/2, this.sizeX, this.sizeY);
    
  };

}