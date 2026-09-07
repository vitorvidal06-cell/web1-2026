let pedidos = [
    {
        id: 1,
        cliente: "Ana",
        itens: [
            { nome: "Camiseta", preco: 50, qtd: 2 },
            { nome: "Boné", preco: 30, qtd: 1 }
        ]
    },
    {
        id: 2,
        cliente: "Carlos",
        itens: [
            { nome: "Tênis", preco: 200, qtd: 1 }
        ]
    },
    {
        id: 3,
        cliente: "Maria",
        itens: [
            { nome: "Calça", preco: 100, qtd: 2 },
            { nome: "Blusa", preco: 60, qtd: 1 }
        ]
    }
];


// A) Cliente e valor total de cada pedido
let resumoPedidos = pedidos.map(pedido => {

    let total = pedido.itens.reduce((soma, item) => {
        return soma + item.preco * item.qtd;
    }, 0);

    return {
        cliente: pedido.cliente,
        total: total
    };
});

console.log("Resumo dos pedidos:", resumoPedidos);


// B) Pedidos com valor >= R$ 200
let pedidosAcimaDe200 = resumoPedidos.filter(pedido => {
    return pedido.total >= 200;
});

console.log("Pedidos >= R$ 200:", pedidosAcimaDe200);


// C) Faturamento total
let faturamentoTotal = pedidos.reduce((total, pedido) => {

    let valorPedido = pedido.itens.reduce((soma, item) => {
        return soma + item.preco * item.qtd;
    }, 0);

    return total + valorPedido;

}, 0);

console.log("Faturamento total: R$", faturamentoTotal);


// D) Quantidade total de produtos vendidos
let quantidadeTotal = pedidos.map(pedido => {

    return pedido.itens.reduce((total, item) => {
        return total + item.qtd;
    }, 0);

}).reduce((total, quantidade) => {
    return total + quantidade;
}, 0);

console.log("Quantidade total de produtos:", quantidadeTotal);