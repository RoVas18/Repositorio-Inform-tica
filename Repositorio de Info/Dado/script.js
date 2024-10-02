function Evaluar(){
    let number = document.getElementById('entrada');
    let output = document.getElementById('salida');

    output.textContent = Math.ceil(Math.random()*number.value);
    //alert('Hola ' + yourName.value); 
}