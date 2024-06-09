# memoize function

Esta entrega trata de entender y aplicar la funcionalidad memoize a una función para que ésta no se ejecute continuamente cuando se llame siempre con los mismos parámetros, sino que sea capaz de almacenar en caché el resultado para evitar así su ejecucuión continua.
Como veremos en el ejemplo que he creado, basándome en la secuencia Fibonacci, se puede apreciar la carga de procesos en cpu usando memoize y no usandolo.

- Para ejecutar el proyecto hay que descargar el repositorio y tener instalado en el ordenador **nodejs**.
- Para instalar dependencias basta con ejecutar el comando **npm install** en consola en la carpeta del proyecto.
- El archivo principal del proyecto es **app.ts**, para compilar el proyecto a Js hay que ejecutar en consola el comando: **npm run build**
- Para ejecutar el testing hay que ejecutar **npm run test**
- Para ejecutar la funcionalidad CLI del proyecto basta con ejecutar el comando **npm run cli**
- Para ejecutar el frontend se puede usar la extension en visual studio code "live server" o bien ejecutar el servidor que he creado en la app con express **npm run server** y visitar la siguiente dirección: http://localhost:5000/index.html
