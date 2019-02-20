'use strict';

class Game{
  constructor(canvas){
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.player;
    this.key;
    this.enemies = [];
    this.doors = [];
    this.platforms = [];
    this.spikes = [];
    this.fallSpikes = [];
    this.littleSpikes = [];
    this.kids = [];
    this.isGameOver = false;
    this.level = 1;
    this.timer = 0;
    this.audioMonster = new Audio("audio/monster.mp3");
    this.audioSteel = new Audio("audio/steel.mp3");
   
  };

  startLoop(){

    this.doors.push(new Door(1, this.canvas, 150, this.canvas.height-35));
    this.doors.push(new Door(1, this.canvas, this.canvas.width-150, this.canvas.height-35));
    this.doors.push(new Door(1, this.canvas, this.canvas.width-150, this.canvas.height-235));
    this.platforms.push(new Platform(1, this.canvas, this.canvas.width/2, this.canvas.height-85, 150, 20));
    this.platforms.push(new Platform(1, this.canvas, this.canvas.width-150, this.canvas.height-190, 200, 20));
    

    this.doors.push(new Door(2, this.canvas, 150, this.canvas.height-35));
    this.doors.push(new Door(2, this.canvas, this.canvas.width-200, this.canvas.height-35));
    this.doors.push(new Door(2, this.canvas, this.canvas.width/2, 200));
    this.doors.push(new Door(2, this.canvas, this.canvas.width-100, 100));
    this.platforms.push(new Platform(2, this.canvas, this.canvas.width/2, this.canvas.height-85, 50, 20));
    this.platforms.push(new Platform(2, this.canvas, this.canvas.width/2, 245, 150, 20));
    this.platforms.push(new Platform(2, this.canvas, this.canvas.width/2-150, this.canvas.height-150, 50, 20));
    this.littleSpikes.push(new LittleSpike(2, this.canvas, this.canvas.width/2, this.canvas.height-10));
    this.littleSpikes.push(new LittleSpike(2, this.canvas, this.canvas.width/2-50, this.canvas.height-10));
    this.littleSpikes.push(new LittleSpike(2, this.canvas, this.canvas.width/2+50, this.canvas.height-10));

    this.doors.push(new Door(3, this.canvas, this.canvas.width-100, this.canvas.height-35));
    this.doors.push(new Door(3, this.canvas, this.canvas.width-100, this.canvas.height-170));
    this.doors.push(new Door(3, this.canvas, 100, this.canvas.height-35));
    this.platforms.push(new Platform(3, this.canvas, this.canvas.width-200, this.canvas.height-125, 400, 20));
    this.platforms.push(new Platform(3, this.canvas, 200, this.canvas.height-75, 50, 20));
    this.spikes.push(new Spike(3, this.canvas, 250, this.canvas.height, 'bottom'));
    this.spikes.push(new Spike(3, this.canvas, 300, this.canvas.height, 'bottom'));
    this.littleSpikes.push(new LittleSpike(3, this.canvas, 200, this.canvas.height-95));
    this.enemies.push(new Enemy(3, this.canvas, this.canvas.width-250, this.canvas.height-165, 1, 70));

    this.doors.push(new Door(4, this.canvas, 100, this.canvas.height-135));
    this.doors.push(new Door(4, this.canvas, this.canvas.width-200, this.canvas.height-35));
    this.platforms.push(new Platform(4, this.canvas, 150, this.canvas.height-90, 300, 20));
    this.enemies.push(new Enemy(4, this.canvas, this.canvas.width/2, this.canvas.height-30, 1, 60));

    this.doors.push(new Door(5, this.canvas, this.canvas.width-150, this.canvas.height-35));
    this.doors.push(new Door(5, this.canvas, this.canvas.width-150, this.canvas.height-235));
    this.doors.push(new Door(5, this.canvas, this.canvas.width-150, this.canvas.height-435));
    this.platforms.push(new Platform(5, this.canvas, this.canvas.width-250, this.canvas.height-190, 500, 20));
    this.platforms.push(new Platform(5, this.canvas, this.canvas.width-250, this.canvas.height-390, 500, 20));
    this.platforms.push(new Platform(5, this.canvas, this.canvas.width-50, this.canvas.height-190, 100, 20));
    this.platforms.push(new Platform(5, this.canvas, this.canvas.width-50, this.canvas.height-390, 100, 20));
    this.platforms.push(new Platform(5, this.canvas, 100, this.canvas.height-100, 25, 20));
    this.platforms.push(new Platform(5, this.canvas, 100, this.canvas.height-280, 25, 20));
    this.enemies.push(new Enemy(5, this.canvas, this.canvas.width-300, this.canvas.height-230, 1, 100));
    this.enemies.push(new Enemy(5, this.canvas, this.canvas.width-300, this.canvas.height-430, 1, 100));
    this.spikes.push(new Spike(5, this.canvas, 125, this.canvas.height, 'bottom'));
    this.spikes.push(new Spike(5, this.canvas, 75, this.canvas.height, 'bottom'));
    this.littleSpikes.push(new LittleSpike(5, this.canvas, this.canvas.width-475, this.canvas.height-210));
    this.littleSpikes.push(new LittleSpike(5, this.canvas, this.canvas.width-475, this.canvas.height-410));

    this.doors.push(new Door(6, this.canvas, 75, this.canvas.height-335));
    this.doors.push(new Door(6, this.canvas, this.canvas.width-75, this.canvas.height-35));
    this.doors.push(new Door(6, this.canvas, this.canvas.width-75, this.canvas.height-335));
    this.platforms.push(new Platform(6, this.canvas, this.canvas.width-100, this.canvas.height-290, 200, 20));
    this.platforms.push(new Platform(6, this.canvas, 100, this.canvas.height-290, 200, 20));
    this.platforms.push(new Platform(6, this.canvas, this.canvas.width/2, this.canvas.height-100, 40, 20));
    this.platforms.push(new Platform(6, this.canvas, this.canvas.width/2-100, this.canvas.height-200, 40, 20));
    this.platforms.push(new Platform(6, this.canvas, this.canvas.width/2+100, this.canvas.height-200, 40, 20));
    this.platforms.push(new Platform(6, this.canvas, 150, this.canvas.height-150, 40, 20));
    this.platforms.push(new Platform(6, this.canvas, 75, this.canvas.height-200, 40, 20));
    this.spikes.push(new Spike(6, this.canvas, this.canvas.width/2-100, this.canvas.height, 'bottom'));
    this.spikes.push(new Spike(6, this.canvas, this.canvas.width/2+100, this.canvas.height, 'bottom'));
    this.spikes.push(new Spike(6, this.canvas, this.canvas.width/2-50, this.canvas.height, 'bottom'));
    this.spikes.push(new Spike(6, this.canvas, this.canvas.width/2+50, this.canvas.height, 'bottom'));
    this.spikes.push(new Spike(6, this.canvas, this.canvas.width/2, this.canvas.height, 'bottom'));
    this.littleSpikes.push(new LittleSpike(6, this.canvas, 100, this.canvas.height-10));
    this.littleSpikes.push(new LittleSpike(6, this.canvas, 75, this.canvas.height-10));
    this.littleSpikes.push(new LittleSpike(6, this.canvas, 50, this.canvas.height-10));
    this.kids.push(new Kid(6, 1, this.canvas, 75, this.canvas.height-225));

    this.doors.push(new Door(7, this.canvas, 100, this.canvas.height-35));
    this.doors.push(new Door(7, this.canvas, this.canvas.width-100, this.canvas.height-35));
    this.doors.push(new Door(7, this.canvas, this.canvas.width/2-50, this.canvas.height-135));
    this.doors.push(new Door(7, this.canvas, this.canvas.width/2+50, this.canvas.height-135));
    this.platforms.push(new Platform(7, this.canvas, this.canvas.width/2, this.canvas.height-90, 300, 20));
    this.kids.push(new Kid(7, 2, this.canvas, this.canvas.width/2, this.canvas.height-15));
    
    this.doors.push(new Door(8, this.canvas, 75, this.canvas.height-185));
    this.doors.push(new Door(8, this.canvas, this.canvas.width-75, this.canvas.height-185));
    this.doors.push(new Door(8, this.canvas, this.canvas.width/2, this.canvas.height-35));
    this.platforms.push(new Platform(8, this.canvas, this.canvas.width-100, this.canvas.height-140, 200, 20));
    this.platforms.push(new Platform(8, this.canvas, 100, this.canvas.height-140, 200, 20));
    this.platforms.push(new Platform(8, this.canvas, this.canvas.width/2, this.canvas.height-90, 80, 20));
    this.enemies.push(new Enemy(8, this.canvas, 200, this.canvas.height-30, 1, 70));
    this.enemies.push(new Enemy(8, this.canvas, this.canvas.width-200, this.canvas.height-30, 1, 70));
    this.kids.push(new Kid(8, 3, this.canvas, 50, this.canvas.height-15));

    this.doors.push(new Door(9, this.canvas, 150, this.canvas.height-35));
    this.doors.push(new Door(9, this.canvas, this.canvas.width-150, this.canvas.height-35));
    this.doors.push(new Door(9, this.canvas, this.canvas.width/2, 200));
    this.platforms.push(new Platform(9, this.canvas, this.canvas.width/2, this.canvas.height-85, 50, 20));
    this.platforms.push(new Platform(9, this.canvas, this.canvas.width/2, 245, 150, 20));
    this.platforms.push(new Platform(9, this.canvas, this.canvas.width/2+150, this.canvas.height-150, 50, 20));
    this.spikes.push(new Spike(9, this.canvas, this.canvas.width/2-100, this.canvas.height, 'bottom'));
    this.spikes.push(new Spike(9, this.canvas, this.canvas.width/2+100, this.canvas.height, 'bottom'));
    this.spikes.push(new Spike(9, this.canvas, this.canvas.width/2-50, this.canvas.height, 'bottom'));
    this.spikes.push(new Spike(9, this.canvas, this.canvas.width/2+50, this.canvas.height, 'bottom'));


    this.doors.push(new Door(10, this.canvas, this.canvas.width-150, this.canvas.height-35));
    this.doors.push(new Door(10, this.canvas, 150, this.canvas.height-35));
    this.doors.push(new Door(10, this.canvas, 150, this.canvas.height-185));
    this.platforms.push(new Platform(10, this.canvas, this.canvas.width/2, this.canvas.height-85, 80, 20));
    this.platforms.push(new Platform(10, this.canvas, 150, this.canvas.height-140, 200, 20));
    this.enemies.push(new Enemy(10, this.canvas, this.canvas.width/2, this.canvas.height-30, 2, 150));

    this.doors.push(new Door(11, this.canvas, 100, this.canvas.height-35));
    this.doors.push(new Door(11, this.canvas, this.canvas.width-200, this.canvas.height-35));

    this.doors.push(new Door(12, this.canvas, this.canvas.width-100, this.canvas.height-35));
    this.doors.push(new Door(12, this.canvas, this.canvas.width-100, 100));
    this.platforms.push(new Platform(12, this.canvas, this.canvas.width-100, 145, 200, 20));
    this.platforms.push(new Platform(12, this.canvas, this.canvas.width/2+150, this.canvas.height-85, 40, 20));
    this.platforms.push(new Platform(12, this.canvas, this.canvas.width/2+25, this.canvas.height-185, 80, 20));
    this.platforms.push(new Platform(12, this.canvas, this.canvas.width/2-150, this.canvas.height-285, 150, 20));
    this.platforms.push(new Platform(12, this.canvas, this.canvas.width/2+100, this.canvas.height-285, 40, 20));
    this.platforms.push(new Platform(12, this.canvas, this.canvas.width/2-300, this.canvas.height-385, 150, 20));
    this.enemies.push(new Enemy(12, this.canvas, this.canvas.width/2-150, this.canvas.height-325, 1, 40));
    this.littleSpikes.push(new LittleSpike(12, this.canvas, this.canvas.width/2+25, this.canvas.height-205));
    this.spikes.push(new Spike(12, this.canvas, this.canvas.width/2+100, this.canvas.height+25, 'bottom'));
    this.spikes.push(new Spike(12, this.canvas, this.canvas.width/2-100, this.canvas.height+25, 'bottom'));
    this.spikes.push(new Spike(12, this.canvas, this.canvas.width/2+50, this.canvas.height+25, 'bottom'));
    this.spikes.push(new Spike(12, this.canvas, this.canvas.width/2-50, this.canvas.height+25, 'bottom'));
    this.spikes.push(new Spike(12, this.canvas, this.canvas.width/2, this.canvas.height+25, 'bottom'));
    

    this.doors.push(new Door(13, this.canvas, this.canvas.width/2, 50));
    this.spikes.push(new Spike(13, this.canvas, this.canvas.width/2, this.canvas.height+25, 'bottom'));
    this.spikes.push(new Spike(13, this.canvas, this.canvas.width/2+50, this.canvas.height+25, 'bottom'));
    this.spikes.push(new Spike(13, this.canvas, this.canvas.width/2-50, this.canvas.height+25, 'bottom'));
    this.spikes.push(new Spike(13, this.canvas, this.canvas.width/2+100, this.canvas.height+25, 'bottom'));
    this.spikes.push(new Spike(13, this.canvas, this.canvas.width/2-100, this.canvas.height+25, 'bottom'));
    this.spikes.push(new Spike(13, this.canvas, this.canvas.width/2+150, this.canvas.height+25, 'bottom'));
    this.spikes.push(new Spike(13, this.canvas, this.canvas.width/2-150, this.canvas.height+25, 'bottom'));

    this.player = new Player(this.canvas);
    this.key = new Key(12, this.player, this.canvas,  this.canvas.width/2-300, this.canvas.height-410);

    const loop = () =>{
      if (!this.isGameOver){
        
        if (this.timer === 50){
          if (this.level ===7){
            this.fallSpikes.push(new FallSpike(7, this.canvas, this.canvas.width/2-135, this.canvas.height-70, 5));
            this.fallSpikes.push(new FallSpike(7, this.canvas, this.canvas.width/2+135, this.canvas.height-70, 5));
          }
        }

        if (this.timer === 75){
          if (this.level ===2){
            this.fallSpikes.push(new FallSpike(2, this.canvas, this.canvas.width/2, 265, 5));
            this.timer = 0;
          }

          if (this.level ===3){
            this.fallSpikes.push(new FallSpike(3, this.canvas, this.canvas.width-200, this.canvas.height-105, 5));
            this.timer = 0;
          }

          if (this.level ===6){
            this.fallSpikes.push(new FallSpike(6, this.canvas, 150, 0, 5));
            this.timer = 0;
          }

          if (this.level ===7){
            this.fallSpikes.push(new FallSpike(7, this.canvas, this.canvas.width/2-110, this.canvas.height-70, 5));
            this.fallSpikes.push(new FallSpike(7, this.canvas, this.canvas.width/2+110, this.canvas.height-70, 5));
          }

          if (this.level ===8){
            this.fallSpikes.push(new FallSpike(8, this.canvas, this.canvas.width/2, 0, 5));
            this.timer = 0;
          }

          if (this.level ===9){
            this.fallSpikes.push(new FallSpike(9, this.canvas, this.canvas.width/2, 265, 5));
            this.timer = 0;
          }

          if (this.level ===10){
            this.fallSpikes.push(new FallSpike(10, this.canvas, this.canvas.width/2, 0, 6));
            this.timer = 0;
          }
     
          
        }

        if (this.timer === 100){
          if (this.level ===7){
            this.fallSpikes.push(new FallSpike(7, this.canvas, this.canvas.width/2-75, this.canvas.height-70, 5));
            this.fallSpikes.push(new FallSpike(7, this.canvas, this.canvas.width/2+75, this.canvas.height-70, 5));
            this.timer = 0;
          }
        }

        if(this.timer ===150){
          if (this.level ===5){
            this.fallSpikes.push(new FallSpike(5, this.canvas, 175, 0, 2));
            this.timer = 0;
          }
          
        }

        this.timer++;

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
    
    this.enemies.forEach((e)=> {
      if (e.level === this.level){
        e.update();
      }
    });

    this.spikes.forEach((s)=> {
      if (s.level === this.level){
        s.update();
      }
    });

    this.fallSpikes.forEach((s)=> {
      if (s.level === this.level){
        s.update();
      }
    });
  };

  drawCanvas(){
    
    this.platforms.forEach((p)=> {
      if (p.level === this.level){
        p.draw();
      }
    });

    this.doors.forEach((d, index)=> {
      if (d.level === this.level){
        if (index === 32){
          d.drawLockedDoor();
        } else{
          d.draw();
        }
      }
    });


    this.enemies.forEach((e)=> {
      if (e.level === this.level){
        e.draw();
        
      }
    });

    this.spikes.forEach((s)=> {
      if (s.level === this.level){
        s.draw();
      }
    });

    this.littleSpikes.forEach((s)=> {
      if (s.level === this.level){
        s.draw();
      }
    });

    this.kids.forEach((k)=> {
      if (k.level === this.level){
        k.draw();
      }
    });

    if (this.key.level == this.level){
      this.key.draw();
    }

    this.fallSpikes.forEach((s, index)=> {
      if (s.level === this.level){
        s.draw();

        if(s.y > this.canvas.height){
          this.fallSpikes.splice(index, 1);
        }
      }
    });
    
    this.player.draw();
  };

  clearCanvas(){
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

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

          this.player.isColliding = true;
          this.timer = 0;
          this.resetAudios();

          if (index === 0){
            this.level = 7;
            this.player.x = this.canvas.width/2-100;
            this.player.y = this.canvas.height-100;
          }
          else if (index === 1){
            this.level = 2;
            this.player.x = 200;
            this.player.y = this.canvas.height-this.player.size/2;
          }
          else if (index === 2){
            this.level = 4;
            this.player.x = 150;
            this.player.y = this.canvas.height-100-this.player.size/2;
            this.audioMonster.play();
          
          }
          else if (index === 3){
            this.level = 1;
            this.player.x = this.canvas.width-200;
            this.player.y = this.canvas.height-this.player.size/2;
          }
          else if (index === 4){
            this.level = 3;
            this.player.x = this.canvas.width-150;
            this.player.y = this.canvas.height-this.player.size/2;
            this.audioMonster.play();
          }
          else if (index === 5){
            this.level = 6;
            this.player.x = this.canvas.width-150;
            this.player.y = this.canvas.height-this.player.size/2;
          }
          else if (index === 6){
            this.level = 10;
            this.player.x = 200;
            this.player.y = this.canvas.height-150-this.player.size/2;
          }
          else if (index === 7){
            this.level = 2;
            this.player.x = this.canvas.width-250;
            this.player.y = this.canvas.height-this.player.size/2;
          }
          else if (index === 8){
            this.level = 5;
            this.player.x = this.canvas.width-200;
            this.player.y = this.canvas.height-this.player.size/2;
            this.audioMonster.play();
          }
          else if (index === 9){
            this.level = 7;
            this.player.x = this.canvas.width/2+100;
            this.player.y = this.canvas.height-120;
          }
          else if (index === 10){
            this.level = 1;
            this.player.x = this.canvas.width-200;
            this.player.y = this.canvas.height-200-this.player.size/2;
            
          }
          else if (index === 11){
            this.level = 6;
            this.player.x = 125;
            this.player.y = this.canvas.height-300-this.player.size/2;
            
          }
          else if (index === 12){
            this.level = 3;
            this.player.x = this.canvas.width-150;
            this.player.y = this.canvas.height-135-this.player.size/2;
            this.audioMonster.play();
          }
          else if (index === 13){
            this.level = 12;
            this.player.x =  this.canvas.width-150;
            this.player.y = this.canvas.height-this.player.size/2;
          }
          else if (index === 14){
            this.level = 8;
            this.player.x = this.canvas.width/2-50;
            this.player.y = this.canvas.height-this.player.size/2;
            this.audioMonster.play();
          }
          else if (index === 15){
            this.level = 4;
            this.player.x = this.canvas.width-250;
            this.player.y = this.canvas.height-this.player.size/2;
            this.audioMonster.play();
          }
          else if (index === 16){
            this.level = 2;
            this.player.x = this.canvas.width/2+50;
            this.player.y = 235-this.player.size/2;
          }
          else if (index === 17){
            this.level = 7;
            this.player.x = this.canvas.width-150;
            this.player.y = this.canvas.height-this.player.size/2;
          }
          else if (index === 18){
            this.level = 13;
            this.player.x = this.canvas.width/2;
            this.player.y = 75;
            // this.level = 8;
            // this.player.x = 125;
            // this.player.y = this.canvas.height-150-this.player.size/2;
          }
          else if (index === 19){
            this.level = 6;
            this.player.x = this.canvas.width-150;
            this.player.y = this.canvas.height-300-this.player.size/2;
          }
          else if (index === 20){
            this.level = 1;
            this.player.x = 200;
            this.player.y = this.canvas.height-this.player.size/2;
          }
          else if (index === 21){
            this.level = 3;
            this.player.x = 150;
            this.player.y = this.canvas.height-this.player.size/2;
            this.audioMonster.play();
          }
          else if (index === 22){
            this.level = 13;
            this.player.x = this.canvas.width/2;
            this.player.y = 75;
            // this.level = 7;
            // this.player.x = 150;
            // this.player.y = this.canvas.height-this.player.size/2;
          }
          else if (index === 23){
            this.level = 9;
            this.player.x = 200;
            this.player.y = this.canvas.height-this.player.size/2;
          }
          else if (index === 24){
            this.level = 5;
            this.player.x = this.canvas.width-200;
            this.player.y = this.canvas.height-400-this.player.size/2;
            this.audioMonster.play();
          }
          else if (index === 25){
            this.level = 8;
            this.player.x = this.canvas.width-125;
            this.player.y = this.canvas.height-150-this.player.size/2;
            this.audioMonster.play();
          }
          else if (index === 26){
            this.level = 13;
            this.player.x = this.canvas.width/2;
            this.player.y = 75;
          }
          else if (index === 27){
            this.level = 10;
            this.player.x = this.canvas.width-200;
            this.player.y = this.canvas.height-this.player.size/2;
            this.audioMonster.play();
          }
          else if (index === 28){
            this.level = 9;
            this.player.x = this.canvas.width/2-50;
            this.player.y = 235-this.player.size/2;
          }
          else if (index === 29){
            this.level = 11;
            this.player.x = 150;
            this.player.y = this.canvas.height-this.player.size/2;
          }
          else if (index === 30){
            this.level = 2;
            this.player.x = this.canvas.width-100;
            this.player.y = 150;
          }
          else if (index === 31){
            this.level = 10;
            this.player.x = 200;
            this.player.y = this.canvas.height-this.player.size/2;
            this.audioMonster.play();
          }
          else if (index === 32){
            if(this.player.hasKey === true){
              this.isGameOver = true;
              this.onWin(this.player.numberKids);
            }
          }
          else if (index === 33){
            this.level = 5;
            this.player.x = this.canvas.width-200;
            this.player.y = this.canvas.height-200-this.player.size/2;
            this.audioMonster.play();
          }
          else if (index === 34){
            this.level = 13;
            this.player.x = this.canvas.width/2;
            this.player.y = 75;
          }
          console.log(`Use the door ${index}`);
          console.log(this.level);
        }
      }
    });

    this.enemies.forEach((e)=>{
      if (e.level === this.level){
        if(this.player.checkEnemy(e)){
          this.gameOver();
          this.onGameOver(this.player.numberKids);
        }
      }
    });

    this.spikes.forEach((s)=>{
      if (s.level === this.level){
        if(this.player.checkSpike(s)){
          this.gameOver();
          this.onGameOver(this.player.numberKids);
        }
      }
    });

    this.littleSpikes.forEach((s)=>{
      if (s.level === this.level){
        if(this.player.checkLittleSpike(s)){
          this.gameOver();
          this.onGameOver(this.player.numberKids);
        }
      }
    });

    this.fallSpikes.forEach((s)=>{
      if (s.level === this.level){
        if(this.player.checkSpike(s)){
          this.gameOver();
          this.onGameOver(this.player.numberKids);
        }
      }
    });

    this.kids.forEach((k, index)=> {
      if (k.level === this.level){
        if (this.player.checkObject(k)){
          this.player.numberKids ++;
          this.kids.splice(index, 1);
          let kidsText = document.getElementById('kids-text');
          kidsText.innerText = `Kids: ${this.player.numberKids}/3`;
        }
      }
    });


    if (this.key.level === this.level){
      if (this.player.checkObject(this.key)){
        this.player.hasKey = true;
      }
    }
  };

  gameOver(){
    this.isGameOver = true;
    this.resetAudios();
  }

  resetAudios(){
    this.audioMonster.pause();
    this.audioMonster.currentTime = 0;
    this.audioSteel.pause();
    this.audioSteel.currentTime = 0;
  }

  winCallback(callback){
    this.onWin = callback;
  };

  gameOverCallback(callback){
    this.onGameOver = callback;
  };
};