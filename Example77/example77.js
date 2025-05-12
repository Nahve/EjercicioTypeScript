function mostrarMultiplosDeTres() {
    var multiplos = [];
    for (var i = 1; i <= 50; i++) {
        if (i % 3 === 0) {
            multiplos.push(i);
        }
    }
    console.log("Múltiplos de 3 del 1 al 50:");
    console.log(multiplos.join(', '));
}
mostrarMultiplosDeTres();
