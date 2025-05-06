"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
// El resto de tu código para calcular el producto
function calcularProducto() {
    var numero1Str = prompt("Por favor, introduce el primer número:");
    var numero2Str = prompt("Por favor, introduce el segundo número:");
    if (numero1Str !== null && numero2Str !== null) {
        var numero1 = parseFloat(numero1Str);
        var numero2 = parseFloat(numero2Str);
        if (!isNaN(numero1) && !isNaN(numero2)) {
            var producto = numero1 * numero2;
            console.log("El producto de ".concat(numero1, " y ").concat(numero2, " es: ").concat(producto));
        }
        else {
            console.log("Por favor, introduce números válidos.");
        }
    }
    else {
        console.log("No se recibieron ambos números.");
    }
}
calcularProducto();
