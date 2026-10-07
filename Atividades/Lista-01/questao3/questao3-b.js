
function calcularProduto(...numeros) {
    let produto = 1;


    for (let i = 0; i < numeros.length; i++) {
        produto = produto * numeros[i];
    }

    return produto;
}

let quantidade = Number(prompt("Quantos números deseja multiplicar?"));
let valores = [];

for (let i = 0; i < quantidade; i++) {
    valores[i] = Number(prompt(`Digite o ${i + 1}º número:`));
}

let resultado = calcularProduto(...valores);

console.log("O produto é: " + resultado);