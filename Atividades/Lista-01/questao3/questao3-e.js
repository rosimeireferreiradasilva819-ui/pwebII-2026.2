function calcularTotal(valorUnitario, quantidade, desconto = 0) {
    let total = valorUnitario * quantidade;
    let valorDesconto = total * desconto / 100;

    return total - valorDesconto;
}

let valorUnitario = Number(prompt("Digite o valor unitário do produto:"));
let quantidade = Number(prompt("Digite a quantidade:"));
let desconto = prompt("Digite o desconto em porcentagem ou deixe vazio:");

let total;

if (desconto === "") {
    total = calcularTotal(valorUnitario, quantidade);
} else {
    total = calcularTotal(valorUnitario, quantidade, Number(desconto));
}

console.log("Valor total: R$ " + total);