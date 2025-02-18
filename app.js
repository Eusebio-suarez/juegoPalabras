//iconos de jugadores
let iconoJugador1 = document.getElementById("1")
let iconoJugador2 = document.getElementById("2")
let iconoJugador3 = document.getElementById("3")
let iconoJugador4 = document.getElementById("4")


// manejo de turnos
let elementoTiempo = document.getElementById("tiempo");
let tiempo = 60
let turno = 0
let contador


//cronometro de 60 segundos para los 4 turnos
function contadorTiempo() {
    if (turno >= 5) {  
        clearInterval(contador); 
        return
    }

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
    }, 100) 
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

// Iniciar el primer turno
contadorTiempo()



