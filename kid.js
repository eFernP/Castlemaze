class Kid{

  constructor(level, number, canvas, x, y){
    this.level = level;
    this.number = number;
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.sizeX = 25;
    this.sizeY = 40;
    this.x = x;
    this.y = y;
    
  };
  
  draw(){
    
    if (this.number === 1){
      const img = new Image();
      img.src = "img/kid-1.png";
      this.context.drawImage(img, this.x-this.sizeX/2, this.y-this.sizeY/2, this.sizeX, this.sizeY);
    }

    if (this.number === 2){
      const img = new Image();
      img.src = "img/kid-2.png";
      this.context.drawImage(img, this.x-this.sizeX/2, this.y-this.sizeY/2, this.sizeX, this.sizeY);
    }

    if (this.number === 3){
      const img = new Image();
      img.src = "img/kid-3.png";
      this.context.drawImage(img, this.x-this.sizeX/2, this.y-this.sizeY/2, this.sizeX, this.sizeY);
    }
  };

}