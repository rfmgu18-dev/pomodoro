const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById ("pauseBtn");
const resetBtn = document.getElementById ("resetBtn");

let tiempo = 25 * 60;
let intervalo = null;

function formatoMinsSecs(segundos) {
    const min = Math.floor(segundos / 60);
    const seg = segundos % 60;
}



function iniciarTimer() {
    if (intervalo) return;
    intervalo = setInterval(() => {
        if (tiempo <= 0) {
            clearInterval(intervalo);
            intervalo = null;
            alert("Haz trabajado mucho! Tómate un descanso :D");
        }
        tiempo--;
        actuDisplay();
        }, 1000);
}

function pausarTimer() {
    intervalo = null;
    console.log(alert("Haz pausado el timer exitosamente!"));
    
}

function reiniciarTimer() {
    pausarTimer();
    tiempo = 25 * 60;
    actuDisplay();
    console.log(alert("Haz reiniciado el timer exitosamente!"));
    
}

startBtn.addEventListener("click", iniciarTimer);
pauseBtn.addEventListener("click", pausarTimer);
resetBtn.addEventListener("click", reiniciarTimer);

actuDisplay();
