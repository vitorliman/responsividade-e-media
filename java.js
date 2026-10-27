
let valores = [];
let total = 0;

for (let i = 0; i < 7; i++) {
    let valor = Number(prompt("Digite o valor da compra:"));
    valores.push(valor);
}

for (let i = 0; i < valores.length; i++) {
    total += valores[i];
}

if (total > 300) {
    total = total - (total * 0.10);
    console.log("Você ganhou 10% de desconto!");
}

console.log("Total das compras: R$ " + total.toFixed(2));
