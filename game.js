const readline = require('readline');


const colores = {
  reset: "\x1b[0m",
  rojo: "\x1b[31m",
  verde: "\x1b[32m",
  amarillo: "\x1b[33m",
  azul: "\x1b[34m"
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
const maxIntentos = 7;
let intentos = 0;

console.log(`${colores.azul}¡Bienvenido al juego de Adivina el Número!${colores.reset}`);
console.log(`Estoy pensando en un número entre 1 y 100. Tienes ${maxIntentos} intentos.`);

function pista(diferencia) {
  if (diferencia === 0) return "¡Correcto!";
  if (diferencia <= 5) return `${colores.rojo} ¡Caliente!${colores.reset}`;
  if (diferencia <= 15) return `${colores.amarillo} Tibio...${colores.reset}`;
  return `${colores.azul}❄️ Frío...${colores.reset}`;
}

function preguntar() {
  rl.question(`\nIntento ${intentos + 1}: ¿Cuál crees que es el número? `, (respuesta) => {
    const intento = parseInt(respuesta);

    if (isNaN(intento) || intento < 1 || intento > 100) {
      console.log(`${colores.rojo}Ingresa un número válido entre 1 y 100.${colores.reset}`);
      preguntar();
      return;
    }

    intentos++;

    const diferencia = Math.abs(numeroSecreto - intento);

    if (diferencia === 0) {
      console.log(`${colores.verde}🎉 ¡Felicidades! Adivinaste el número en ${intentos} intento(s).${colores.reset}`);
      rl.close();
    } else if (intentos < maxIntentos) {
      console.log(pista(diferencia));
      preguntar();
    } else {
      console.log(`${colores.rojo} Se acabaron tus intentos. El número era ${numeroSecreto}.${colores.reset}`);
      rl.close();
    }
  });
}

preguntar();
console.log("Probando cambios para Git ✨");
console.log("wenas");
console.log ("patata")