# Castlemaze

## Descripción

Mi primer proyecto se trata de un juego de plataformas. El jugador tiene que escapar del castillo en el que está atrapado, avanzando entre sus distintas salas y esquivando o deshaciéndose de los enemigos y peligros que vaya encontrando. 

## MVP - Tecnología

Para crear este juego utilizaré Canvas para poder crear las distintas pantallas que lo conforman. Como mínimo me propongo crear un jugador que se pueda mover hacia la derecha y hacia la izquierda, saltar, subirse a una plataforma y cruzar una puerta por la que acceder a otro nivel.

## Backlog

- Más niveles
- Más objetos (espada y llave)
- Cronómetro
- Enemigos más fuertes o trampa de pinchos
- Imágenes y CSS para la splashScreen, gameOverScreen y winScreen
- Animar el player y los enemigos
- Sonidos


## Estructuras de Datos


Game:

- canvas
- context
- player
- enemies
- doors
- platforms
- spikes
- littleSpikes
- fallSpikes
- kids
- isGameOver
- audios
- startLoop()
- updateCanvas()
- clearCanvas()
- drawCanvas()
- checkAllCollisions()
- gameOver()
- gameOverCallback(callback)
- winCallback(callback)


Player:

- canvas
- context
- size
- x
- y
- speed
- direction
- jumpSpeed
- gravity
- isColliding
- hasKey
- numberKids
- spriteChange
- numberSprite
- update()
- draw()
- checkScreen()
- checkPlatform(platform)
- checkDoor(door)
- checkEnemy(enemy)
- checkObject(object)

Enemy;

- canvas
- context
- sizeX
- sizeY
- x
- y
- speed
- direction
- speed
- direction
- range
- start
- update(player)
- draw()
- setDirection(direction)

Door:

- canvas
- context
- sizeX
- sizeY
- x
- y
- draw()


Platform:

- canvas
- context
- sizeX
- sizeY
- x
- y
- draw()
- drawLockedDoor()

Spike:

- canvas
- context
- sizeX
- sizeY
- x
- y
- speed
- position
- direction
- update()
- draw()


LittleSpike:

- canvas
- context
- sizeX
- sizeY
- x
- y
- draw()

FallSpike:

- canvas
- context
- sizeX
- sizeY
- x
- y
- speed
- direction
- update()
- draw()


## States y States Transitions

Transiciones:

- splashScreen()
- gameScreen()
- gameScreen2()
- gameoverScreen()
- winScreen()

Main:

- main()
- buildDom(html)
- buildSplashScreen()
- buildGameScreen()
- buildGame2Screen()
- buildGameOverScreen()
- buildWinScreen()
- setPlayerDirection()


## Task

- Crear las tres pantallas e implementar las transiciones entre ellas.
- Crear loop
- Crear el player y sus movimientos.
- Crear las plataformas del primer nivel del juego.
- Implementar las colisiones entre el player y las plataformas.
- Crear otra pantalla para el segundo nivel.
- Crear las puertas.
- Implementar la colisión entre el player y una puerta y cambiar a la pantalla del segundo nivel.
- Crear un enemigo
- Implementar las colisiones entre el player y el enemigo
- Implementar la muerte del player y el enlace con la gameOverScreen
- Asignar a la puerta final el enlace con la winScreen
- Añadir imágenes


## Links

### Git

Repositorio: https://github.com/esterFern/Castlemaze

Deploy: https://esterfern.github.io/Castlemaze/

### Slides.com

https://slides.com/esterfernandez/deck/live#/

## Instrucciones del juego 

Mueve el personaje hacia la izquierda o la derecha usando las flechas del teclado correspondientes. Salta con la barra espaciadora.
Busca la salida del laberinto. Esquiva las trampas y los enemigos. Rescata a niños si lo deseas para mayor puntuación antes de marcharte del laberinto. 