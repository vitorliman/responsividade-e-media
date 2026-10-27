
let lista = [];

for (let i = 0; i < 5; i++) {
    let produto = prompt("Digite um produto da lista:");
    lista.push(produto);
}

let busca = "";

while (busca.toLowerCase() !== "sair") {
    busca = prompt("Qual produto deseja procurar? (Digite sair para encerrar)");

    if (busca.toLowerCase() === "sair") {
        break;
    }

    if (lista.includes(busca)) {
        console.log("O produto está na lista!");
    } else {
        console.log("O produto não está na lista.");
    }
}

console.log("Programa encerrado.");
