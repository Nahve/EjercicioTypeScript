const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function preguntarNumero(pregunta) {
  return new Promise((resolve) => {
    rl.question(pregunta, (respuesta) => {
      const numero = parseInt(respuesta);
      if (isNaN(numero)) {
        console.log("Por favor, introduce un número entero válido.");
        resolve(preguntarNumero(pregunta));
      } else {
        resolve(numero);
      }
    });
  });
}

async function main() {
  const numero1 = await preguntarNumero("Introduce el primer número entero: ");

  if (numero1 === 0) {
    console.log("El producto de 0 por cualquier número es 0");
    rl.close();
  } else {
    const numero2 = await preguntarNumero("Introduce el segundo número entero: ");
    const producto = numero1 * numero2;
    console.log(`El producto de ${numero1} por ${numero2} es ${producto}`);
    rl.close();
  }
}

main();
