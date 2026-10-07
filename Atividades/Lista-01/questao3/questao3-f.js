let conta = {
    numero: prompt("Digite o número da conta:"),
    saldo: Number(prompt("Digite o saldo inicial:")),

    depositar: function(valor) {
        this.saldo = this.saldo + valor;
        console.log("Depósito de R$ " + valor + " realizado com sucesso.");
    },

    sacar: function(valor) {
        if (valor <= this.saldo) {
            this.saldo = this.saldo - valor;
            console.log("Saque de R$ " + valor + " realizado com sucesso.");
        } else {
            console.log("Saque não realizado: saldo insuficiente.");
        }
    },

    informarSaldo: function() {
        console.log("Saldo atual da conta " + this.numero + ": R$ " + this.saldo);
    }
};

let deposito = Number(prompt("Digite o valor para depositar:"));
conta.depositar(deposito);

let saque = Number(prompt("Digite o valor para sacar:"));
conta.sacar(saque);

conta.informarSaldo();