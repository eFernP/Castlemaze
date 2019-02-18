class Kid{

  constructor(level, canvas, x, y){
    this.level = level;
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.sizeX = 30;
    this.sizeY = 40;
    this.x = x;
    this.y = y;
    
  };
  
  draw(){
    this.context.fillStyle = "white";
    this.context.fillRect(this.x-this.sizeX/2, this.y-this.sizeY/2, this.sizeX, this.sizeY);
  };

}