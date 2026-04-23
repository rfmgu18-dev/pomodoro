const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const skipBtn = document.getElementById("skipBtn");

// Variables y arreglos
const tiempos = [25 * 60, 5 * 60];
const modos = ["trabajo", "descanso"];
let modoIndex = 0;
let tiempoActual = tiempos[modoIndex];
let intervalo = null;

// Funciones
function formatoMinsSecs(segundos) {
  const min = Math.floor(segundos / 60);
  const seg = segundos % 60;
  let segTexto = seg;
  if (seg < 10) {
    segTexto = "0" + seg;
  }
  return min + ":" + segTexto;
}

function actuDisplay() {
  display.innerText = formatoMinsSecs(tiempoActual);
}

function iniciarTimer() {
  if (intervalo !== null) {
    return;
  }

  intervalo = setInterval(actualizarTimer, 1000);
}

function actualizarTimer() {
  tiempoActual = tiempoActual - 1;
  if (tiempoActual < 0) {
    clearInterval(intervalo);
    intervalo = null;
    cambiarTimer();
    return;
  }
  actuDisplay();
}

function cambiarTimer() {
  if (intervalo !== null) {
    clearInterval(intervalo);
    intervalo = null;
  }

  modoIndex = modoIndex === 0 ? 1 : 0;
  tiempoActual = tiempos[modoIndex];

  alert("Se ha cambiado al modo de " + modos[modoIndex] + " exitosamente!");

  actuDisplay();
  iniciarTimer();
}

function pausarTimer() {
  if (intervalo !== null) {
    clearInterval(intervalo);
    intervalo = null;
    alert("Haz pausado el timer exitosamente!");
  }
}

function reiniciarTimer() {
  if (intervalo !== null) {
    clearInterval(intervalo);
    intervalo = null;
  }
  tiempoActual = tiempos[modoIndex];
  actuDisplay();
  alert("Haz reiniciado el timer exitosamente!")
}

//Sección de eventos
startBtn.addEventListener("click", iniciarTimer);
pauseBtn.addEventListener("click", pausarTimer);
resetBtn.addEventListener("click", reiniciarTimer);
skipBtn.addEventListener("click", cambiarTimer);

actuDisplay();
