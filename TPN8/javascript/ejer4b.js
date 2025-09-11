window.onload = function() {
    // Pedir dos números
    var num1 = prompt("Ingrese el primer numero:");
    var num2 = prompt("Ingrese el segundo numero:");

    // Convertir a número (porque prompt devuelve texto)
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    // Realizar operaciones
    var suma = num1 + num2;
    var resta = num1 - num2;
    var multiplicacion = num1 * num2;
    var division = num1 / num2;

    // Mostrar resultados en la página
    document.write("<h2>Resultados de las operaciones</h2>");
    document.write("<p><strong>Suma:</strong> " + suma + "</p>");
    document.write("<p><strong>Resta:</strong> " + resta + "</p>");
    document.write("<p><strong>Multiplicacion:</strong> " + multiplicacion + "</p>");
    document.write("<p><strong>Division:</strong> " + division + "</p>");

    // Mostrar mensaje de confirmación
    alert("Los resultados han sido mostrados en la pagina.");
}