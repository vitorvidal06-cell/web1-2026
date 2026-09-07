let produtos = [
    {
        id: 1,
        nome: "Teclado",
        preco: 120,
        categoria: "Periféricos"
    },
    {
        id: 2,
        nome: "Mouse",
        preco: 80,
        categoria: "Periféricos"
    },
    {
        id: 3,
        nome: "Monitor",
        preco: 900,
        categoria: "Monitores"
    }
];

// A) Nome e preço com 10% de desconto
let produtosComDesconto = produtos.map(produto => {

    let novoPreco = produto.preco * 0.90;

    return {
        nome: produto.nome,
        preco: novoPreco
    };
});

console.log("Produtos com desconto:", produtosComDesconto);


// B) Produtos da categoria Periféricos
let perifericos = produtos.filter(produto => {
    return produto.categoria === "Periféricos";
});

console.log("Periféricos:", perifericos);


// C) Valor total dos produtos
let valorTotal = produtos.reduce((total, produto) => {
    return total + produto.preco;
}, 0);

console.log("Valor total: R$", valorTotal);


// D) Preço médio
let precoMedio = produtos.reduce((total, produto) => {
    return total + produto.preco;
}, 0) / produtos.length;

console.log("Preço médio: R$", precoMedio);