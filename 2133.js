let puntosJugador1 = Math.floor(Math.random() * 10) + 1;
let puntosJugador2 = Math.floor(Math.random() * 10) + 1;

console.log("🎲 Ronda 1:");
console.log("Jugador 1: " + puntosJugador1);
console.log("Jugador 2: " + puntosJugador2);

// Segunda ronda
let nuevaCartaJugador1 = Math.floor(Math.random() * 10) + 1;
let nuevaCartaJugador2 = Math.floor(Math.random() * 10) + 1;

puntosJugador1 += nuevaCartaJugador1;
puntosJugador2 += nuevaCartaJugador2;

console.log("🎲 Ronda 2:");
console.log("Jugador 1 saca: " + nuevaCartaJugador1 + " | Total: " + puntosJugador1);
console.log("Jugador 2 saca: " + nuevaCartaJugador2 + " | Total: " + puntosJugador2);

// Verificar si alguien superó 21 en la segunda ronda
if (puntosJugador1 > 21 && puntosJugador2 > 21) {
    console.log("❌ Ambos jugadores se pasaron de 21. ¡Empate final!");
    process.exit();
} else if (puntosJugador1 > 21) {
    console.log("❌ Jugador 1 se pasó de 21. ¡Jugador 2 gana!");
    process.exit();
} else if (puntosJugador2 > 21) {
    console.log("❌ Jugador 2 se pasó de 21. ¡Jugador 1 gana!");
    process.exit();
}

// Tercera ronda (solo si aún no hay ganador)
let ultimaCartaJugador1 = Math.floor(Math.random() * 10) + 1;
let ultimaCartaJugador2 = Math.floor(Math.random() * 10) + 1;

puntosJugador1 += ultimaCartaJugador1;
puntosJugador2 += ultimaCartaJugador2;

console.log("🎲 Ronda 3:");
console.log("Jugador 1 saca: " + ultimaCartaJugador1 + " | Total: " + puntosJugador1);
console.log("Jugador 2 saca: " + ultimaCartaJugador2 + " | Total: " + puntosJugador2);

// Verificar si alguien se pasa de 21 en la tercera ronda
if (puntosJugador1 > 21 && puntosJugador2 > 21) {
    console.log("❌ Ambos jugadores se pasaron de 21. ¡Empate final!");
} else if (puntosJugador1 > 21) {
    console.log("❌ Jugador 1 se pasó de 21. ¡Jugador 2 gana!");
} else if (puntosJugador2 > 21) {
    console.log("❌ Jugador 2 se pasó de 21. ¡Jugador 1 gana!");
} else if (puntosJugador1 > puntosJugador2) {
    console.log("🏆 ¡Jugador 1 gana con " + puntosJugador1 + " puntos!");
} else if (puntosJugador2 > puntosJugador1) {
    console.log("🏆 ¡Jugador 2 gana con " + puntosJugador2 + " puntos!");
} else {
    console.log("🤝 ¡Empate final!");
}

