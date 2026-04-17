const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById ("pauseBtn");
const resetBtn = document.getElementById ("resetBtn");

let tiempoTrabajo = 25 * 60;
let tiempoDescanso = 5 * 60;
let Tiempoactual = tiempoTrabajo
let intervalo = null;

function formatoMinsSecs(segundos) {
    const min = Math.floor(segundos / 60);
    const seg = segundos % 60;
    return `${min.toString().padStart(2, "0")}:${seg.toString().padStart(2, "0")}`;
}

function actuDisplay() {
  display.textContent = formatoMinsSecs(tiempoActual);
}




function iniciarTimer() {}
        if (tiempo <= 0) {

            alert("Haz trabajado mucho! Tómate un descanso :D");
        }


function pausarTimer() {
    intervalo = null;
    console.log(alert("Haz pausado el timer exitosamente!"));
    
}

function reiniciarTimer() {
    intervalo = null
    pausarTimer();
    tiempo = 25 * 60;
    actuDisplay();
    alert("Haz reiniciado el timer exitosamente!");
    
}

startBtn.addEventListener("click", iniciarTimer);
pauseBtn.addEventListener("click", pausarTimer);
resetBtn.addEventListener("click", reiniciarTimer);

actuDisplay();
