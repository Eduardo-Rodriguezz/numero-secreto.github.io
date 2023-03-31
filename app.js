//declaración de variables y elementos.
const gameTitle = document.getElementById('game-title');
const srcImagen = document.getElementById('imagen');
const inputNumber = document.getElementById('input-number');
const textResultado = document.getElementById('text-resultado');
const gameReglas = document.getElementById('game-reglas');
const numIntentos = document.getElementById('num-intentos');
const btnStart = document.getElementById('btn-start');
const btnReset = document.getElementById('btn-reset');
let accIntentos = 10;

//Se genera el numero Random oculto. (rango: 1-100).
const miRandomNumber = Math.floor(Math.random() * 100) + 1;
console.log(miRandomNumber);

//Declaración de textos y dialogos de interfaz de usuario.
gameTitle.textContent = 'Adivina el Número Secreto.';
gameReglas.textContent = 'Reglas: Ingresa un número (entre 1-100) en el siguiente cuadro y pulsa "Adivinar", tienes 10 intentos.';
srcImagen.style.backgroundImage = "url('secretnum.jpg')";
btnStart.textContent = 'Avidinar Número';
btnReset.textContent = 'Reiniciar juego';
btnReset.style.display = 'none';
numIntentos.textContent = `Número de Intentos: ${accIntentos}`;

//función para comparar el número proporcionado por el usuario con el numero generado aleatoriamente.
btnStart.addEventListener('click', () => { 
    console.log(miRandomNumber);
    accIntentos -= 1;
    numIntentos.textContent = `Número de Intentos: ${accIntentos}`;
 
    const adivinarNumero = (num) => {
        if(accIntentos < 1) {
            textResultado.style.color ='#ff8888';
            textResultado.textContent = `Game Over - Intentalo de nuevo.`;
            btnStart.style.display = 'none';
            inputNumber.style.display = 'none';
            btnReset.style.display = 'block';
            srcImagen.style.backgroundImage = "url('carita-triste.jpg')";

        } else if((num === '') || (num > 100) || (num < 1) || (isNaN(num))) {
            textResultado.style.color ='#ff8888';
            textResultado.textContent = `Ingresa un número, entre 1 y 100`;

        } else if(num > miRandomNumber) {
            textResultado.style.color ='#cacece';
            textResultado.textContent = `El número secreto es menor que ${inputNumber.value}`;
            
        } else if(num < miRandomNumber) {
            textResultado.style.color ='#cacece';
            textResultado.textContent = `El número secreto es mayor que ${inputNumber.value}`;

        } else {
            textResultado.style.color = '#6dc56d';
            textResultado.textContent = `Felicidades! el número es: ${miRandomNumber} ¡Lo has encontrado!`;
            btnReset.style.display = 'block';
            btnStart.style.display = 'none';
            srcImagen.style.backgroundImage = "url('carita-feliz.JPG')";
            
        }
    }

    adivinarNumero(inputNumber.value);

})

//Funcion en el evento click del boton reset, para reestablecer los valores definidos para una nueva aprtida.
btnReset.addEventListener('click', () => {
    srcImagen.style.backgroundImage = "url('secretnum.jpg')";
    textResultado.textContent = ``;
    btnStart.style.display = 'block';
    inputNumber.style.display = 'block';
    inputNumber.value = '';
    accIntentos = 10;
    numIntentos.textContent = `Número de Intentos: ${accIntentos}`;
    btnReset.style.display = 'none';
})
