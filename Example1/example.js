"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
//let nombre: string | null = prompt("Por favor, ingresa tu nombre:");
//if (nombre) {
//console.log('Hola ' + nombre);
//} else {
//  console.log('No ingresaste ningún nombre.');
//}
//let nombre: string = "Nahuel"
//console.log('Hola'+ nombre)
const prompt = (0, prompt_sync_1.default)();
let nombre = (_a = prompt("Por favor, ingresa tu nombre:")) !== null && _a !== void 0 ? _a : ""; // El ?? "" proporciona un string vacío si el usuario no ingresa nada
console.log('Hola ' + nombre);
