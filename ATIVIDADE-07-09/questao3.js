let estoque = [
    { sku: 1, nome: "Teclado", qtd: 5, minimo: 10 },
    { sku: 2, nome: "Mouse", qtd: 20, minimo: 10 },
    { sku: 3, nome: "Monitor", qtd: 3, minimo: 5 },
    { sku: 4, nome: "Fone", qtd: 15, minimo: 8 }
];

// A) Itens críticos
let itensCriticos = estoque.filter(item => {
    return item.qtd <= item.minimo;
});

console.log("Itens críticos:", itensCriticos);


// B) Função para repor estoque
function repor(estoque, sku, qtd) {

    let indice = estoque.findIndex(item => {
        return item.sku === sku;
    });

    if (indice === -1) {
        console.log("Produto não encontrado!");
        return estoque;
    }

    return estoque.map((item, i) => {

        if (i === indice) {
            return {
                ...item,
                qtd: item.qtd + qtd
            };
        }

        return item;
    });
}


// Repondo 10 unidades do produto SKU 1
let novoEstoque = repor(estoque, 1, 10);

console.log("Estoque antigo:", estoque);
console.log("Novo estoque:", novoEstoque);