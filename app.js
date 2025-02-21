//iconos de jugadores
let iconoJugador1 = document.getElementById("1")
let iconoJugador2 = document.getElementById("2")
let iconoJugador3 = document.getElementById("3")
let iconoJugador4 = document.getElementById("4")


// manejo de turnos
let elementoTiempo = document.getElementById("tiempo");
let elementoLetra = document.getElementById("letra")
let tiempo = 60
let turno = 0
let contador

// elemento que mostrara el ganador del juego
let elementoGanador = document.getElementById("ganador")
let ganador = `jugador ${turno}`

// input con la palabra
let elementoPalabra = document.getElementById("inputPalabra")

////array con las palabras ingresadas
let listaPalabras = []

//cronometro de 60 segundos para los 4 turnos
function contadorTiempo() {
    if (turno >= 5) {  
        clearInterval(contador); 
        return
    }
    obtenerGanador()
    elementoLetra.textContent = generarLetra()
    listaPalabras = []
    turno++
    turnos(turno)
    tiempo = 60
    contador = setInterval(() => {
        elementoTiempo.textContent = `${tiempo} segundos`
        tiempo--

        if (tiempo < 0) {
            clearInterval(contador); 
            contadorTiempo()
        }
    }, 200)
}

//general letra aleatoria

function generarLetra() {
    return String.fromCharCode(97 + Math.floor(Math.random() * 26));
}

// cambiar estado de icono del jugador
function turnos(turno) {
    let turnoAnterior = turno-1
    let jugador = document.getElementById(turno)
    let jugadorAnterior = document.getElementById(turnoAnterior)
    jugador.style.backgroundColor = "#25b864"
    if(turno>=2){
    jugadorAnterior.style.backgroundColor = "#fff"
    }
}

// obtener las palabras ingresadas filtrando las palabras que sean ! == null
function obtenerPalabra() {
    let palabra = elementoPalabra.value
    elementoPalabra.value = ""
    if(palabra.startsWith(elementoLetra.textContent)){
        listaPalabras.push(palabra)
    }
    listaPalabras = listaPalabras.filter(item => item !== "");
    listaPalabras = [...new Set(listaPalabras)];
    console.log(listaPalabras);
}

let palabrasMax=0

// obtener el ganador del juego validadndo el tamaño del array
function obtenerGanador() {
    let palabrasIngresadas =listaPalabras.length
    if (palabrasIngresadas>palabrasMax) {
        palabrasMax=palabrasIngresadas
        ganador=`jugador ${turno}`
    }
    if (turno >= 4) {  
        console.log("hola fin");
        elementoGanador.textContent = ganador
    }
    
}

// Iniciar el primer turno
contadorTiempo()