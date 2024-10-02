function mostrarresultado(resultado){
    document.getElementById('output').value = resultado
 }
 
 function suma(){
     let numero1 = +document.getElementById('num1').value;
     let numero2 = +document.getElementById('num2').value;
     mostrarresultado(numero1 + numero2);
 }
 
 function resta(){
     let numero1 = +document.getElementById('num1').value;
     let numero2 = +document.getElementById('num2').value;
     mostrarresultado(numero1 - numero2);
 }
 
 function multiplicacion(){
     let numero1 = +document.getElementById('num1').value;
     let numero2 = +document.getElementById('num2').value;
     mostrarresultado(numero1 * numero2);
 }
 
 function division(){
     let numero1 = +document.getElementById('num1').value;
     let numero2 = +document.getElementById('num2').value;
     mostrarresultado(numero1 / numero2);
 }
 
 function raiz(){
     let numero1 = +document.getElementById('num1').value;
     let numero2 = +document.getElementById('num2').value;
     mostrarresultado(Math.sqrt (numero1));
 }
 
 function potenciación(){
     let numero1 = +document.getElementById('num1').value;
     let numero2 = +document.getElementById('num2').value;
     mostrarresultado(Math.pow(numero1,numero2));
 }
 
 function borrar(){
     document.getElementById('output').value = ' ';
     document.getElementById('num1').value = ' ';
     document.getElementById('num2').value = ' ';
 }