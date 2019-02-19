'use strict';

const main = () => {
  
  let leftPressed = false;
  let rightPressed = false;
  let game;
  

         

  const buildDom = (html) => {
    const main = document.querySelector('body');
    main.innerHTML = html; 
    return main;
  };

  const buildSplashScreen = () => {
    const splashScreen = buildDom(`
    <div class=menu-background>
    <main class="container">
    <section class="splash-screen">
    <div class="text-splash">
    <h1 class="title-splash">Castlemaze</h1>
    <h2 class="subtitle-splash">Save the kids and exit the castle alive!</h2>
    </div>
    <button class="button" id="start-button">Start</button>
    <button class="button" id="instructions-button">Instructions</button>
    </section>
    </main>
    </div>`);

    const startButton = document.getElementById('start-button');
    startButton.addEventListener('click', buildGameScreen);

    const instructionsButton = document.getElementById('instructions-button');
    instructionsButton.addEventListener('click', buildInstructionsScreen);
  };

  const buildInstructionsScreen = () => {
    const splashScreen = buildDom(`
    <div class=menu-background>
    <main class="container">
    <section class="splash-screen">
    <div class="text-splash">
    <h1 class="title-splash">Castlemaze</h1>
    <ul>
    <li>To move use the arrows left and right</li>
    <li>To jump use the spacebar</li>
    <li>Have fun!</li>
    </ul>
    </div>
    <button class="button">Back</button>
    </section>
    </main>
    </div>
   `);

    const startButton = document.querySelector('button');
    startButton.addEventListener('click', buildSplashScreen);

  };

  const buildGameScreen = () => {
    const gameScreen = buildDom(`
    
    <main class="container">
      <section class="game-screen">
        <div class="interface">
          <div id="kids-text">Kids: 0/3</div> 
          <button id="quitButton" class="button">Quit</button>
        </div>
        <canvas></canvas>
        <div class="floor"> </div>
      </section>
      </main>
    
    `);

    const quitButton = document.querySelector('button');
    quitButton.addEventListener('click', buildGameOverScreen);

    const width = document.querySelector('.game-screen').offsetWidth;
    const height = document.querySelector('.game-screen').offsetHeight;

    const canvasElement = document.querySelector('canvas');
    canvasElement.setAttribute('width', width);
    canvasElement.setAttribute('height', height);

    game = new Game(canvasElement);
    game.winCallback(buildWinScreen);
    game.gameOverCallback(buildGameOverScreen);
    game.startLoop();

    const setPlayerDirection = () => {
      if(event.code === 'ArrowLeft'){
        game.player.setDirection(-1);
        game.player.x --;
        leftPressed = true;
      } else if(event.code ==='ArrowRight'){
        game.player.setDirection(1);
        game.player.x ++;
        rightPressed = true;
      }
    };

    const stopPlayer = () => {
      if(event.code === 'ArrowLeft'){
        if(rightPressed){
          game.player.setDirection(1);
        }else{
          game.player.setDirection(0);
        }
        leftPressed = false;
      } else if (event.code === 'ArrowRight'){
        if(leftPressed){
          game.player.setDirection(-1);
        }else{
          game.player.setDirection(0);
        }
        rightPressed = false;
      }
    };

    const jumpPlayer = () => {
      if (event.code === 'Space' && game.player.isColliding === true){
        game.player.jumpSpeed = -10;
        game.player.y = game.player.y - 1;
        game.player.isColliding = false;
      }
    }
  
    document.addEventListener('keydown', setPlayerDirection);
    document.addEventListener('keyup', stopPlayer);
    document.addEventListener('keydown', jumpPlayer);

  };

  const buildGameOverScreen = () => {
    const splashScreen = buildDom(`
    <div class=menu-background>
    <main class="container">
    <section class="game-over-screen">
    <div class="text-game-over">
    <h1 class="title-splash">YOU DIED</h1>
    <div id=final-kids></div>
    </div>
    <button class="button">Try again</button>
    </section></main></div>`);

    game.isGameOver = true;

    const finalKids = document.getElementById('final-kids');
    if (game.player.numberKids === 0){
      finalKids.innerText = "At least any kid died with you.";
    } else if (game.player.numberKids === 1){
      finalKids.innerText = `And ${game.player.numberKids} kid died with you!`;
    }else if (game.player.numberKids > 1){
      finalKids.innerText = `And ${game.player.numberKids} kids died with you!`;
    }

    const restartButton = document.querySelector('button');
    restartButton.addEventListener('click', buildGameScreen);

  };


  const buildWinScreen = () => {
    const splashScreen = buildDom(`
    <div class=menu-background>
    <main class="container">
    <section class="win-screen">
    <div class="text-win">
    <h1 class="title-splash">YOU ARE OUT!</h1>
    <div id=final-kids></div>
    </div>
    <button class="button">Restart</button>
    </section>
    </main></div>`);

    const finalKids = document.getElementById('final-kids');
    if (game.player.numberKids === 0){
      finalKids.innerText = "You didn't save any kid. Monster!";
    } else if (game.player.numberKids === 1){
      finalKids.innerText = `You saved ${game.player.numberKids} kid.`;
    }else if (game.player.numberKids === 2){
      finalKids.innerText = `You saved ${game.player.numberKids} kids.`;
    } else if (game.player.numberKids === 3){
      finalKids.innerText = `You saved all the kids. Congratulations!`;
    }

    const restartButton = document.querySelector('button');
    restartButton.addEventListener('click', buildGameScreen);
  };

  

  buildSplashScreen();

};


window.addEventListener('load', main);
