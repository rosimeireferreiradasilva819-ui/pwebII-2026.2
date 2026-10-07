function fatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }

    return numero * fatorial(numero - 1);
}

let numero = Number(prompt("Digite um número inteiro positivo:"));

if (numero >= 0 && numero % 1 === 0) {
    console.log("Fatorial: " + fatorial(numero));
} else {
    console.log("Digite um número inteiro positivo.");
}