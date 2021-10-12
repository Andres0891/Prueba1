function Sumar() {
    var num1 = document.getElementById("N1").value;
    var num2 = document.getElementById("N2").value;
    var resultado = parseInt(num1) + parseInt(num2);
    alert("La suma de los numeros es: " + resultado);
}
function Restar() {
    var num1 = document.getElementById("N1").value;
    var num2 = document.getElementById("N2").value;
    var resultado = parseInt(num1) - parseInt(num2);
    alert("La resta de los numeros es: " + resultado);
}
function Dividir() {
    var num1 = document.getElementById("N1").value;
    var num2 = document.getElementById("N2").value;
    var resultado = parseInt(num1) / parseInt(num2);
    alert("La Divi de los numeros es: " + resultado);
}
function Multi() {
    var num1 = document.getElementById("N1").value;
    var num2 = document.getElementById("N2").value;
    var resultado = parseInt(num1) * parseInt(num2);
    alert("La Multiplicacion de los numeros es: " + resultado);
}

function ver() {
    var dato = document.getElementById("Materia").value;
    switch (dato) {
        case "Programación":
               alert("Usted a seleccionado Programacion");
            break;
        case "Soporte TI":
            alert("Usted a selecionado Soporte TI");
            break;
        case "TICS":
            alert("Usted a seleccionado TICS");
            break;
        case "Diseño de Software":
            alert("Usted a seleccionado Diseño de Software");
            break;
        default:
            break;
    }  
}
function pizza(){
    var Edad = document.getElementById("Edad").value;
    if(Edad >=18 ) {
        alert("Eres mayor de edad");
    } 
    else{
        alert("Eres menor de edad");
    }
}

