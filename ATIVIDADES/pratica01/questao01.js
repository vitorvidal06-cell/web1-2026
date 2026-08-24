let reais = Number(prompt("Digite o valor em reais:"));

let cotacao = Number(prompt("Digite a cotação atual do dólar:"));

let dolares = reais / cotacao;

alert("Valor em dólares: US$ " + dolares.toFixed(2));