'use strict';

class Player{
  constructor(canvas){
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.size = 40;
    this.x = this.canvas.width/2;
    this.y = this.canvas.height-(this.size/2);
    this.direction = 0;
    this.speed = 3;
    this.speedJump = 4;
    this.isJumping = false;
    this.isFalling = false;
  }

  update(){
    this.x = this.x + this.speed * this.direction;

    if(this.isJumping === true){
      this.y = this.y + this.speedJump;
    }

    if (this.isFalling === true){
      this.y = this.y - this.speedJump;
    }
  }

  draw(){
    this.context.fillStyle = "blue";
    this.context.fillRect(this.x-this.size/2, this.y-this.size/2, this.size, this.size);
  }

  setDirection(direction){
    this.direction = direction; 
  }

  jump(){
    this.isJumping = true;
  }

}