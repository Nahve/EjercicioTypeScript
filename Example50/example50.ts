import * as readline from 'readline';

// Creamos una interfaz para leer la entrada del usuario desde la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pedirNumero(pregunta: string): Promise<number> {
  return new Promise((resolve, reject) => {
    rl.question(pregunta, (respuesta) => {
      const numero = parseInt(respuesta, 10);
      if (isNaN(numero)) {
        reject(new Error("Entrada no válida. Por favor, introduce un número entero."));
      } else {
        resolve(numero);
      }
    });
  });
}

async function compararNumeros() {
  try {
    const num1 = await pedirNumero("Introduce el primer número entero: ");
    const num2 = await pedirNumero("Introduce el segundo número entero: ");

    if (num1 === num2) {
      console.log("Los números son iguales.");
    } else if (num1 > num2) {
      console.log(`El número mayor es: ${num1}`);
    } else {
      console.log(`El número mayor es: ${num2}`);
    }

  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error("Ha ocurrido un error inesperado.");
    }
  } finally {
    rl.close(); // Cerramos la interfaz de lectura
  }
}

// Ejecutamos la función principal
compararNumeros();