window.onload = function() {
    // Pedimos los datos
    var nombre = prompt("Ingrese su nombre:");
    var apellido = prompt("Ingrese su apellido:");
    var estado_civil = prompt("Ingrese su esatdo civil:");
    var edad = prompt("Ingrese su edad:");
    var fecha_de_nacimiento = prompt("Ingrese su fecha de nacimiento:");
    var dni = prompt("Ingrese su dni:");

    // Mostramos en formato del Ejercicio 1 (ejemplo)
    document.write("<h2>Datos Personales</h2>");
    document.write("<p><strong>Nombre:</strong> " + nombre + "</p>");
    document.write("<p><strong>Apellido:</strong> " + apellido + "</p>");
    document.write("<p><strong>estado_civil:</strong> " + estado_civil + "</p>");
    document.write("<p><strong>edad:</strong> " + edad+ "</p>");
    document.write("<p><strong>fecha_de_nacimiento:</strong> " + fecha_de_nacimiento+ "</p>");
    document.write("<p><strong>dni:</strong> " + dni + "</p>");

    // Mostramos cuadro de diálogo al finalizar
    alert("Sus datos han sido impresos");
}