const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        this.saldo += valor;
        this.historicos.push({
            tipo: "Depósito",
            valor: valor
        });
        return `Depósito de R$${valor / 100} realizado para o cliente: ${this.nome}.`;
    },
    sacar: function (valor) {
        if (valor > this.saldo) {
            return `Saldo insuficiente para o saque de: ${this.nome}.`;
        }

        this.saldo -= valor;
        this.historicos.push({
            tipo: "Saque",
            valor: valor
        });
        return `Saque de R$${valor / 100} realizado para o cliente: ${this.nome}.`;
    },
    extrato: function () {
        let historicoExt = "";
        for (const historico of this.historicos) {
            historicoExt += `${historico.tipo} de R$${historico.valor / 100}\n`;
        }
        return `Extrato de ${this.nome} - Saldo: R$${this.saldo / 100}\nHistórico:\n${historicoExt}`;
    }
};

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());


