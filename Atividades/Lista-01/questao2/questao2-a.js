let valorReais = Number(prompt("Digite o valor em reais:"));
let cotacao = Number(prompt("Digite a cotação do dólar:"));

let valorDolares = valorReais * cotacao;

console.log("Valor em dólares: US$ " + valorDolares);