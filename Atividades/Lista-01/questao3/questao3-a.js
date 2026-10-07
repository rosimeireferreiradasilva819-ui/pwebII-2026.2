function calcular(numero1, numero2, operador) {
    if (operador === "+") {
        return numero1 + numero2;
    } else if (operador === "-") {
        return numero1 - numero2;
    } else if (operador === "/") {
        return numero1 / numero2;
    } else if (operador === "*") {
        return numero1 * numero2;
    } else {
        return "Operação inválida";
    }
}
n1 = Number(prompt("Digite o primeiro número: "));
n2 = Number(prompt("Digite o segundo número: "));
operacao = prompt("Digite a operação (+, -, *, /): ");
console.log(`Resultado: ${calcular(n1, n2, operacao)}`);