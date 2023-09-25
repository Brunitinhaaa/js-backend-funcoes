const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    Total_a_Pagar: 0,
    Total_de_Itens: 0,
    calcularTotalDeItens: function () {
        let totalDeItens = 0;
        for (const produto of this.produtos) {
            totalDeItens += produto.qtd;
        }
        return totalDeItens;
    },
    calcularTotalAPagar: function () {
        let totalAPagar = 0;
        for (const produto of this.produtos) {
            totalAPagar += produto.qtd * produto.precoUnit;
        }
        return totalAPagar;
    },
    calcularDesconto: function () {
        const totalDeItens = this.calcularTotalDeItens();
        const totalAPagar = this.calcularTotalAPagar();
        let desconto = 0;

        if (totalDeItens > 4) {
            let menorPreco = this.produtos[0].precoUnit;
            for (const produto of this.produtos) {
                if (produto.precoUnit < menorPreco) {
                    menorPreco = produto.precoUnit;
                }
            }
            desconto = menorPreco;
        }

        if (totalAPagar > 10000) {
            const desconto10Porcento = totalAPagar * 0.10;
            desconto = desconto >= desconto10Porcento ? desconto : desconto10Porcento;
        }

        return desconto;
    },
    imprimirResumo: function () {
        console.log(this.nomeDoCliente);
        this.Total_de_Itens = this.calcularTotalDeItens();
        console.log(`Total de itens: ${this.Total_de_Itens} itens`);

        this.Total_a_Pagar = this.calcularTotalAPagar();
        console.log(`Total a pagar: R$ ${this.Total_a_Pagar / 100}`);

        const desconto = this.calcularDesconto();
        console.log(`Desconto: R$ ${desconto / 100}`);
        console.log(`Valor final: R$ ${(this.Total_a_Pagar - desconto) / 100}`);
    },
    imprimirDetalhes: function () {
        console.log(this.nomeDoCliente);
        for (let i = 0; i < this.produtos.length; i++) {
            const produto = this.produtos[i];
            console.log(`Item ${i + 1} - ${produto.nome} - ${produto.qtd} und - R$ ${(produto.qtd * produto.precoUnit) / 100}`);
        }
        console.log(`\nTotal de itens: ${this.calcularTotalDeItens()} itens`);
        console.log(`Total a pagar: R$ ${this.calcularTotalAPagar() / 100}`);

        const desconto = this.calcularDesconto();
        console.log(`Desconto: R$ ${desconto / 100}`);
        console.log(`Valor final: R$ ${(this.calcularTotalAPagar() - desconto) / 100}`);
    }
};

carrinho.imprimirResumo();

carrinho.produtos.push({
    id: 3,
    nome: "Sapato",
    qtd: 3,
    precoUnit: 8000
});
carrinho.imprimirDetalhes();

