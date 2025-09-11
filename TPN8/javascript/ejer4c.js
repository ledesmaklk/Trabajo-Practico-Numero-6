window.onload = function() {
    // Pedimos los datos personales
    var nombre = prompt("Ingrese su nombre:");
    var apellido = prompt("Ingrese su apellido:");
    var estado_civil = prompt("Ingrese su estado civil:");
    var edad = prompt("Ingrese su edad:");
    var fecha_de_nacimiento = prompt("Ingrese su fecha de nacimiento:");
    var dni = prompt("Ingrese su dni:");

    // Mostramos en formato del Ejercicio 1 (ejemplo)

    // Pedimos confirmación antes de mostrar
    var confirmar = confirm("¿Desea mostrar sus datos personales en la pagina?");

    if (confirmar) {
        // Si acepta, mostramos los datos
        document.write("<h2>Datos Personales</h2>");
        document.write("<p><strong>Nombre:</strong> " + nombre + "</p>");
        document.write("<p><strong>Apellido:</strong> " + apellido + "</p>");
        document.write("<p><strong>Edad:</strong> " + estado_civil + "</p>");
        document.write("<p><strong>Dirección:</strong> " + edad + "</p>");
        document.write("<p><strong>fecha_de_nacimiento:</strong> " + fecha_de_nacimiento+ "</p>");
        document.write("<p><strong>dni:</strong> " + dni + "</p>");
        alert("Sus datos han sido impresos.");
    } else {
        // Si cancela, mostramos un mensaje alternativo
        document.write("<h2>Datos no mostrados</h2>");
        document.write("<p>Usted decidio no mostrar sus datos personales.</p>");
    }
}