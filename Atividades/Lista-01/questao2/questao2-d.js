let quantidade = Number(prompt("Quantos números você vai digitar?"));
let soma = 0;

for (let i = 1; i <= quantidade; i++) {

    let primo = true;

    if (i <= 1) {
        primo = false;
    } else {
        for (let divisor = 2;
            
            divisor < i; divisor++) {
            if (i % divisor === 0) {
                primo = false;
            }
        }
    }

    if (primo === true) {
        soma = soma + i;
    }
}

console.log("Soma dos números primos: " + soma);