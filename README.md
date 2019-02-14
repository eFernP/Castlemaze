# Castlemaze

## Descripción

Mi primer proyecto se trata de un juego de plataformas. El jugador tiene que escapar del castillo en el que está atrapado, avanzando entre sus distintas salas y esquivando o deshaciéndose de los enemigos y peligros que vaya encontrando. 

## MVP - Tecnología (DOM - CANVAS)

Para crear este juego utilizaré Canvas para poder crear las distintas pantallas que lo conforman.

## Backlog

- Cronómetro
- Más objetos (espada y llave)
- Enemigos más fuertes
- Sonidos
- Imágenes para la splashScreen, gameOverScreen y winScreen
- Animar el player y los enemigos


## Estructuras de Datos


Clase "Main"

main()
buildDom(html)
buildSplashScreen()
buildGameScreen()
buildGameOver()
setPlayerDirection()



Clase "Game"

startLoop()
updateCanvas()
clearCanvas()
drawCanvas()
checkAllCollisions()
gameOverCallback(callback)


Clase "Player"

update()
draw()
checkScreen()
checkPlatform(platform)
checkDoor(door)
checkEnemy(enemy)

Clase "Enemy"

update(player)
draw()

Clase "Door"

draw()


Clase "Platform"

draw()


## States y States Transitions

Definicion del las transiciones del juego y del main.

- splashScreen
- gameScreen
- gameoverScreen
- winScreen

funciones de transicion.

## Task

- Crear las tres pantallas e implementar las transiciones entre ellas.
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

### Trello

[Link url](https://trello.com)

### Git

Especificar las url del proyecto y del deploy

[Link Repositorio](http://github.com)

[Link Deploy](http://github.com)

### Slides.com

Especificar la url de la presentacion

[Link Slides.com](http://slides.com)

## Instrucciones del juego 

Al finalizar el juego generar las instrucciones
