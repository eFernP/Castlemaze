'use strict';

class Platform{

  constructor(canvas){
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.sizeX =  100;
    this.sizeY = 40;
    this.x = this.canvas.width-this.sizeX/2;
    this.y = this.canvas.height - 75;


  ;}

  draw(){
    this.context.fillStyle = "#111";
    this.context.fillRect(this.x-this.sizeX/2, this.y-this.sizeY/2, this.sizeX, this.sizeY);
  };







}