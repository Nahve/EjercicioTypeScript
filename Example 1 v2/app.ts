// Obtener referencias a los elementos del DOM
const nombreInputElement = document.getElementById('nombreInput') as HTMLInputElement | null;
const saludarButtonElement = document.getElementById('saludarBtn') as HTMLButtonElement | null;
const mensajeSaludoElement = document.getElementById('mensajeSaludo') as HTMLParagraphElement | null;

// Verificar que los elementos existen antes de añadir el event listener
if (saludarButtonElement && nombreInputElement && mensajeSaludoElement) {
    saludarButtonElement.addEventListener('click', () => {
        const nombre: string = nombreInputElement.value.trim(); // Obtener y limpiar el valor del input

        if (nombre) {
            mensajeSaludoElement.textContent = `Hola, ${nombre}!`;
        } else {
            mensajeSaludoElement.textContent = 'Por favor, introduce tu nombre.';
        }
        // Opcional: Limpiar el input después de saludar
        // nombreInputElement.value = '';
    });
} else {
    console.error('No se pudieron encontrar uno o más elementos del DOM. Revisa los IDs en tu HTML.');
}