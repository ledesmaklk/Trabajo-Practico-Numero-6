
function suma(X, Y) {
    return X + Y;
}
function resta(X, Y) {
    return X - Y;
}
function division(X, Y) {
    return Y !== 0 ? X / Y : 'Error: División por cero';
}
function multiplicacion(X, Y) {
    return X * Y;
}
function potencia(X, Y) {
    return Math.pow(X, Y);
}
function cuadrado(X) {
    return X * X;
}

// Exportar para uso en navegador
window.suma = suma;
window.resta = resta;
window.division = division;
window.multiplicacion = multiplicacion;
window.potencia = potencia;
window.cuadrado = cuadrado;