'use strict';

const main = () => {
  
  const buildDom = (html) => {
    const main = document.querySelector('main');
    main.innerHTML = html; 
    return main;
  };

  const buildSplashScreen = () => {
    const splashScreen = buildDom(`
    <section class="splash-screen">
    <div class="text-splash">
    <h1 class="title-splash">Castlemaze</h1>
    <h2 class="subtitle-splash">Exit the castle alive!</h2>
    </div>
    <button class="button">Start</button>
    </section>`);

    const startButton = document.querySelector('button');
    startButton.addEventListener('click', buildGameScreen);
  };

  const buildGameScreen = () => {
    const gameScreen = buildDom(`
      <section class="game-screen">
        <canvas></canvas>
      </section>
    
    `);

    const width = document.querySelector('.game-screen').offsetWidth;
    const height = document.querySelector('.game-screen').offsetHeight;

    const canvasElement = document.querySelector('canvas');
    canvasElement.setAttribute('width', width);
    canvasElement.setAttribute('height', height);

    //setTimeout(buildWinScreen, 3000);

    const game = new Game(canvasElement);
    game.startLoop();

    const setPlayerDirection = () => {
      if(event.code === 'ArrowLeft'){
        game.player.setDirection(-1);
      } else if(event.code ==='ArrowRight'){
        game.player.setDirection(1);
      }
    };

    const stopPlayer = () => {
      if(event.code === 'ArrowLeft' || event.code === 'ArrowRight'){
        game.player.setDirection(0);
      }
    };

    // const jumpPlayer = () => {
    //   if (event.code === 'space'){
    //     game.player.jump();
    //   }
    // }
  
    document.addEventListener('keydown', setPlayerDirection);
    document.addEventListener('keyup', stopPlayer);
    //document.addEventListener('keydown', jumpPlayer);

  };

  const buildGameOverScreen = () => {
    const splashScreen = buildDom(`
    <section class="game-over-screen">
    <div class="text-game-over">
    <h1 class="title-splash">YOU DIED</h1>
    </div>
    <button class="button">Try again</button>
    </section>`);

    const restartButton = document.querySelector('button');
    restartButton.addEventListener('click', buildGameScreen);
  };


  const buildWinScreen = () => {
    const splashScreen = buildDom(`
    <section class="win-screen">
    <div class="text-win">
    <h1 class="title-splash">YOU WIN</h1>
    </div>
    <button class="button">Restart</button>
    </section>`);

    const restartButton = document.querySelector('button');
    restartButton.addEventListener('click', buildGameScreen);
  };

  

  buildSplashScreen();

};


window.addEventListener('load', main);
