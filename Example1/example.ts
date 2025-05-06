import promptSync from 'prompt-sync';
//let nombre: string | null = prompt("Por favor, ingresa tu nombre:");

//if (nombre) {
  //console.log('Hola ' + nombre);
//} else {
//  console.log('No ingresaste ningún nombre.');
//}

//let nombre: string = "Nahuel"


//console.log('Hola'+ nombre)

const prompt = promptSync();

let nombre: string = prompt("Por favor, ingresa tu nombre:") ?? ""; // El ?? "" proporciona un string vacío si el usuario no ingresa nada

console.log('Hola ' + nombre);
