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
    this.jumpSize = 20;
    this.countJump = 0;
    this.jumpSpeed = 0;
    this.isColliding = true;
    this.gravity = 0.5;
  };

  update(){
    this.x = this.x + this.speed * this.direction;

    if (this.isColliding === false){
      this.y = this.y + this.jumpSpeed;
      this.jumpSpeed = this.jumpSpeed + this.gravity;
    };
    // if(this.isJumping === true){
    //   this.y = this.y - this.speedJump;
    //   this.countJump ++;
    //   if (this.countJump > this.jumpSize){
    //     this.isJumping = false;
    //     this.countJump = 0;
    //     this.isFalling = true;
    //   }
    // }

    // if (this.isFalling === true){
    //   this.y = this.y + this.speedJump/1.5;
    // }
  }

  draw(){
    this.context.fillStyle = "blue";
    this.context.fillRect(this.x-this.size/2, this.y-this.size/2, this.size, this.size);
  };

  setDirection(direction){
    this.direction = direction; 
  };

  jump(){
    this.isJumping = true;
  };

  checkScreen(){
    if (this.y - (this.size/2) <= 0){
      
    }else if(this.y + (this.size/2) >= this.canvas.height){
      this.isColliding = true;  
      this.y = this.canvas.height- this.size/2;
    }

    if (this.x - (this.size/2) <= 0){
      this.direction = 0;
      this.x = 0 + this.size/2;
    }else if (this.x + (this.size/2) >= this.canvas.width){
      this.direction = 0;
      this.x = this.canvas.width - this.size/2;
    }
  };

}