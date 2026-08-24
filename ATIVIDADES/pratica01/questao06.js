let n1 = Number(prompt("Digite a nota N1:"));

let n2 = Number(prompt("Digite a nota N2:"));

let notaFinal = (n1 * 2 + n2 * 3) / 5;

console.log("Nota final:", notaFinal);

if (notaFinal >= 6) {
    console.log("Aluno aprovado!");
} else {
    console.log("Aluno reprovado!");
}