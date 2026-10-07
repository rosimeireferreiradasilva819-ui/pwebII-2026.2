let n1 = Number(prompt("Digite a nota N1:"));
let n2 = Number(prompt("Digite a nota N2:"));

let notaFinal = (n1 * 2 + n2 * 3) / 5;

console.log("Nota final: " + notaFinal);

if (notaFinal >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}