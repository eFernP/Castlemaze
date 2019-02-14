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
  };

  startLoop(){

    this.player = new Player(this.canvas);
    this.platforms.push(new Platform(this.canvas));
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
    this.player.draw();
    this.platforms.forEach((p)=> {
      p.draw();
    });
  }

  clearCanvas(){
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  checkAllCollisions(){
    this.player.checkScreen();
  }
}