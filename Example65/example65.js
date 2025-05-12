"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Función que verifica si num1 es múltiplo de num2
function esMultiplo(num1, num2) {
    return num2 !== 0 && num1 % num2 === 0;
}
// Función para pedir al usuario un número con validación
function pedirNumero(mensaje) {
    return new Promise(function (resolve) {
        rl.question(mensaje, function (input) {
            var texto = input.trim().toLowerCase();
            if (texto === 'salir') {
                resolve("salir");
            }
            else {
                var numero = parseFloat(texto);
                if (isNaN(numero)) {
                    console.log('❌ Entrada inválida. Por favor, introduce un número válido.');
                    resolve(pedirNumero(mensaje)); // Reintentar
                }
                else {
                    resolve(numero);
                }
            }
        });
    });
}
// Función principal
function iniciarPrograma() {
    return __awaiter(this, void 0, void 0, function () {
        var entrada1, entrada2, resultado;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('🔢 Este programa verifica si el primer número es múltiplo del segundo.');
                    console.log('Escribe "salir" en cualquier momento para terminar.\n');
                    _a.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 4];
                    return [4 /*yield*/, pedirNumero('Introduce el primer número (o "salir"): ')];
                case 2:
                    entrada1 = _a.sent();
                    if (entrada1 === "salir")
                        return [3 /*break*/, 4];
                    return [4 /*yield*/, pedirNumero('Introduce el segundo número (o "salir"): ')];
                case 3:
                    entrada2 = _a.sent();
                    if (entrada2 === "salir")
                        return [3 /*break*/, 4];
                    resultado = esMultiplo(entrada1, entrada2);
                    if (resultado) {
                        console.log("\u2705 \u00A1S\u00ED! ".concat(entrada1, " es m\u00FAltiplo de ").concat(entrada2, ".\n"));
                    }
                    else {
                        console.log("\u274C No, ".concat(entrada1, " NO es m\u00FAltiplo de ").concat(entrada2, ".\n"));
                    }
                    return [3 /*break*/, 1];
                case 4:
                    console.log('👋 ¡Hasta luego!');
                    rl.close();
                    return [2 /*return*/];
            }
        });
    });
}
iniciarPrograma();
