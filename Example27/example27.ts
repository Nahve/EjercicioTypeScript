import * as promptSync from 'prompt-sync';
const prompt = promptSync();

// El resto de tu código para calcular el producto
function calcularProducto(): void {
  const numero1Str: string | null = prompt("Por favor, introduce el primer número:");
  const numero2Str: string | null = prompt("Por favor, introduce el segundo número:");

  if (numero1Str !== null && numero2Str !== null) {
    const numero1: number = parseFloat(numero1Str);
    const numero2: number = parseFloat(numero2Str);

    if (!isNaN(numero1) && !isNaN(numero2)) {
      const producto: number = numero1 * numero2;
      console.log(`El producto de ${numero1} y ${numero2} es: ${producto}`);
    } else {
      console.log("Por favor, introduce números válidos.");
    }
  } else {
    console.log("No se recibieron ambos números.");
  }
}

calcularProducto();