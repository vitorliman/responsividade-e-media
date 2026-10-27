
let temperaturas = [];
let soma = 0;

for (let i = 0; i < 7; i++) {
    let temperatura = Number(prompt("Digite a temperatura do dia:"));
    temperaturas.push(temperatura);
}

let maior = temperaturas[0];
let menor = temperaturas[0];

for (let i = 0; i < temperaturas.length; i++) {
    soma += temperaturas[i];

    if (temperaturas[i] > maior) {
        maior = temperaturas[i];
    }

    if (temperaturas[i] < menor) {
        menor = temperaturas[i];
    }
}

let media = soma / temperaturas.length;

console.log("Média da semana: " + media.toFixed(1) + "°C");
console.log("Maior temperatura: " + maior + "°C");
console.log("Menor temperatura: " + menor + "°C");
