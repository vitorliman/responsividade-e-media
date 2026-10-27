
let fila = [];

for (let i = 0; i < 5; i++) {
    let cliente = prompt("Digite o nome do cliente:");
    fila.push(cliente);
}

while (fila.length > 0) {
    let atendido = fila.shift();
    console.log("O cliente " + atendido + " foi atendido");
}

console.log("Fila final:", fila);
