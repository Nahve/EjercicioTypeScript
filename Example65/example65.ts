import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función que verifica si num1 es múltiplo de num2
function esMultiplo(num1: number, num2: number): boolean {
    return num2 !== 0 && num1 % num2 === 0;
}

// Función para pedir al usuario un número con validación
function pedirNumero(mensaje: string): Promise<number | "salir"> {
    return new Promise((resolve) => {
        rl.question(mensaje, (input) => {
            const texto = input.trim().toLowerCase();

            if (texto === 'salir') {
                resolve("salir");
            } else {
                const numero = parseFloat(texto);
                if (isNaN(numero)) {
                    console.log('❌ Entrada inválida. Por favor, introduce un número válido.');
                    resolve(pedirNumero(mensaje)); // Reintentar
                } else {
                    resolve(numero);
                }
            }
        });
    });
}

// Función principal
async function iniciarPrograma(): Promise<void> {
    console.log('🔢 Este programa verifica si el primer número es múltiplo del segundo.');
    console.log('Escribe "salir" en cualquier momento para terminar.\n');

    while (true) {
        const entrada1 = await pedirNumero('Introduce el primer número (o "salir"): ');
        if (entrada1 === "salir") break;

        const entrada2 = await pedirNumero('Introduce el segundo número (o "salir"): ');
        if (entrada2 === "salir") break;

        const resultado = esMultiplo(entrada1, entrada2);
        if (resultado) {
            console.log(`✅ ¡Sí! ${entrada1} es múltiplo de ${entrada2}.\n`);
        } else {
            console.log(`❌ No, ${entrada1} NO es múltiplo de ${entrada2}.\n`);
        }
    }

    console.log('👋 ¡Hasta luego!');
    rl.close();
}

iniciarPrograma();
