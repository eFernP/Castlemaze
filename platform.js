'use strict';

class Platform{

  constructor(level, canvas, x, y, sizeX, sizeY){
    this.level = level;
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.sizeX =  sizeX;
    this.sizeY = sizeY;
    this.x = x;
    this.y = y;


  ;}

  draw(){
    
    //img.onload = function (){};
    
    // this.context.fillStyle = "#111";
    // this.context.fillRect(this.x-this.sizeX/2, this.y-this.sizeY/2, this.sizeX, this.sizeY);
    const img = new Image();
    img.src = "img/platform.jpg";
    this.context.drawImage(img, this.x-this.sizeX/2, this.y-this.sizeY/2, this.sizeX, this.sizeY);
  };







}