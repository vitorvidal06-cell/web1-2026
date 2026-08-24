let inicio = Number(prompt("Digite o primeiro valor:"));

let fim = Number(prompt("Digite o segundo valor:"));

for (let i = inicio; i <= fim; i++) {

    if (i % 2 !== 0) {
        console.log(i);
    }
}