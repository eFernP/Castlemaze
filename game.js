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

    const loop = () =>{

      if (!this.isGameOver){
        window.requestAnimationFrame(loop);
        
      }
      
    }

    window.requestAnimationFrame(loop);

  };
}