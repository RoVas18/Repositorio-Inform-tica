let intervalo;
let tiempofinal;

function iniciar() {
    tiempofinal = parseInt(document.getElementById('contador').value);
    intervalo = setInterval(() => {
        document.getElementById('contador').value = tiempofinal; 
        if (tiempofinal <= 0) {
            clearInterval(intervalo);
            document.getElementById('alarma').play();
        } else {
            tiempofinal--;
        }
    }, 1000);
}
