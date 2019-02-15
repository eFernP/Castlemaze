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
  }

  draw(){
    this.context.fillStyle = "blue";
    this.context.fillRect(this.x-this.size/2, this.y-this.size/2, this.size, this.size);
  };

  setDirection(direction){
    this.direction = direction; 
  };

  checkScreen(){
    let inFloor = false;
    if (this.y - (this.size/2) <= 0){
      
    }else if(this.y + (this.size/2) >= this.canvas.height){
      this.isColliding = true;  
      this.y = this.canvas.height- this.size/2;
      inFloor = true;
    }

    if (this.x - (this.size/2) <= 0){
      this.direction = 0;
      this.x = 0 + this.size/2;
    }else if (this.x + (this.size/2) >= this.canvas.width){
      this.direction = 0;
      this.x = this.canvas.width - this.size/2;
    }

    if (inFloor){
      return true;
    }else{
      return false;
    };
  };

  checkPlatform(platform){
    const collideRight = this.x + this.size/2 >= platform.x - platform.sizeX/2;
    const collideLeft = this.x - this.size/2 <= platform.x + platform.sizeX/2;
    const collideTop = this.y - this.size/2 <=  platform.y + platform.sizeY/2;
    const collideBottom = this.y + this.size/2 >= platform.y - platform.sizeY/2;

    if (collideRight && collideLeft && collideTop && collideBottom){

      if(this.y-this.size/2 < platform.y+platform.sizeY/2 && this.y + this.size/2 > platform.y+platform.sizeY/2){
        this.y = platform.y+platform.sizeY+this.size/2;
        this.jumpSpeed = 0;
        
      }

      if(this.y+this.size/2 > platform.y-platform.sizeY/2 && this.y-this.size/2 < platform.y-platform.sizeY/2){
        this.y = platform.y-this.size/2-platform.sizeY/2;
        this.isColliding = true; 
         
      }

      return true;
     
    }else{
      return false;
    }
  };


  checkDoor(door){
    const collideRight = this.x + this.size/2 >= door.x;
    const collideLeft = this.x - this.size/2 <= door.x;
    const collideTop = this.y - this.size/2 <=  door.y;
    const collideBottom = this.y + this.size/2 >= door.y;

    if (collideRight && collideLeft && collideTop && collideBottom){
      return true;

    } else{
      return false;
    }
  
  };
}