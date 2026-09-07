let carrinho = [
    { id: 1, nome: "Teclado", preco: 120, qtd: 1 },
    { id: 2, nome: "Mouse", preco: 80, qtd: 2 }
];

// A) Adicionar dois itens
carrinho.push({
    id: 3,
    nome: "Monitor",
    preco: 900,
    qtd: 1
});

carrinho.unshift({
    id: 4,
    nome: "Fone",
    preco: 150,
    qtd: 1
});

console.log("Depois de adicionar:", carrinho);

// B) Remover o último e o primeiro
carrinho.pop();
carrinho.shift();

console.log("Depois de remover:", carrinho);

// C) Calcular total
let totalCarrinho = carrinho.reduce((total, item) => {
    return total + item.preco * item.qtd;
}, 0);

console.log("Total do carrinho: R$", totalCarrinho);