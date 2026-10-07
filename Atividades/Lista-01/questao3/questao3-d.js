function encontrarImpares(numeros) {
    let impares = [];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 !== 0) {
            impares[impares.length] = numeros[i];
        }
    }

    return impares;
}

let quantidade = Number(prompt("Quantos números deseja informar?"));
let numeros = [];

for (let i = 0; i < quantidade; i++) {
    numeros[i] = Number(prompt("Digite um número:"));
}

let resultado = encontrarImpares(numeros);

console.log("Números ímpares: " + resultado);