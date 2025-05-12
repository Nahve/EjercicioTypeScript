// Obtener referencias a los elementos del DOM
var nombreInputElement = document.getElementById('nombreInput');
var saludarButtonElement = document.getElementById('saludarBtn');
var mensajeSaludoElement = document.getElementById('mensajeSaludo');
// Verificar que los elementos existen antes de añadir el event listener
if (saludarButtonElement && nombreInputElement && mensajeSaludoElement) {
    saludarButtonElement.addEventListener('click', function () {
        var nombre = nombreInputElement.value.trim(); // Obtener y limpiar el valor del input
        if (nombre) {
            mensajeSaludoElement.textContent = "Hola, ".concat(nombre, "!");
        }
        else {
            mensajeSaludoElement.textContent = 'Por favor, introduce tu nombre.';
        }
        // Opcional: Limpiar el input después de saludar
        // nombreInputElement.value = '';
    });
}
else {
    console.error('No se pudieron encontrar uno o más elementos del DOM. Revisa los IDs en tu HTML.');
}
