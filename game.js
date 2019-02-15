'use strict';

class Game{
  constructor(canvas){
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.player;
    this.enemies = [];
    this.doors = [];
    this.platforms = [];
    this.isGameOver = false;
    this.level = 1;
   
  };

  startLoop(){

    this.platforms.push(new Platform(1, this.canvas, this.canvas.width-100, this.canvas.height-60, 100, 25));
    this.platforms.push(new Platform(1, this.canvas, this.canvas.width-300, this.canvas.height-150, 100, 25));
    this.doors.push(new Door(1, this.canvas, this.canvas.width-300, this.canvas.height-197.5));
    this.doors.push(new Door(2, this.canvas, 100, this.canvas.height-35));
    this.doors.push(new Door(2, this.canvas, this.canvas.width-100, this.canvas.height-35));
    this.player = new Player(this.canvas);
    const loop = () =>{
      if (!this.isGameOver){
        this.checkAllCollisions();
        this.clearCanvas();
        this.updateCanvas();
        this.drawCanvas();
        window.requestAnimationFrame(loop);
      }
    }

    window.requestAnimationFrame(loop);

  };


  updateCanvas(){
    this.player.update();
  }

  drawCanvas(){
    
    this.platforms.forEach((p)=> {
      if (p.level === this.level){
        p.draw();
      }
    });

    this.doors.forEach((d)=> {
      if (d.level === this.level){
        d.draw();
      }
    });

    this.player.draw();
  }

  clearCanvas(){
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  checkAllCollisions(){
    let inFloor = this.player.checkScreen();
    let inPlatform = [];
    let minOne = false;
    this.platforms.forEach((p)=>{

      if (p.level === this.level){
        inPlatform.push(this.player.checkPlatform(p));
      } 
    });

    if (!inFloor){
      inPlatform.forEach((p)=>{
        if(p === true){
          minOne = true;
        }
      });

      if (minOne === false){
        this.player.isColliding = false;
      }
    }

    this.doors.forEach((p, index)=>{
      if (p.level === this.level){
        if (this.player.checkDoor(p)){
          if (index === 0){
            this.level = 2;
            this.player.x = this.canvas.width-550;
            this.player.y = this.canvas.height-this.player.size/2;
          }

          if (index === 1){
            this.level = 1;
            this.player.x = this.canvas.width-330;
            this.player.y = this.canvas.height-162.5-this.player.size/2;
          }

          if (index === 2){
            this.isGameOver = true;
            this.onWin();
            
          }
        }
      }
    });
  };

  winCallback(callback){
    this.onWin = callback;
  }
}