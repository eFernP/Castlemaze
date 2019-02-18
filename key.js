class Key{

  constructor(level, player, canvas, x, y){
    this.level = level;
    this.player = player;
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.sizeX = 30;
    this.sizeY = 30;
    this.x = x;
    this.y = y;
    
  };
  
  draw(){
    // this.context.fillStyle = "gray";
    // this.context.fillRect(this.x-this.sizeX/2, this.y-this.sizeY/2, this.sizeX, this.sizeY);

    if (this.player.hasKey === false){
      const img = new Image();
      img.src = "img/key2.png";
      this.context.drawImage(img, this.x-this.sizeX/2, this.y-this.sizeY/2, this.sizeX, this.sizeY);
    }
  };

}