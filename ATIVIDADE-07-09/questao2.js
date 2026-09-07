let alunos = [
    { nome: "Vitor", notas: [8, 7, 9] },
    { nome: "Ana", notas: [9, 8, 10] },
    { nome: "Carlos", notas: [2, 3, 1] },
    { nome: "João", notas: [5, 6, 4] }
];

// A) Nome e média de cada aluno
let alunosComMedia = alunos.map(aluno => {

    let soma = aluno.notas.reduce((total, nota) => {
        return total + nota;
    }, 0);

    let media = soma / aluno.notas.length;

    return {
        nome: aluno.nome,
        media: media
    };
});

console.log("Alunos e médias:", alunosComMedia);

// B) Alunos com média >= 7
let aprovados = alunosComMedia.filter(aluno => {
    return aluno.media >= 7;
});

console.log("Alunos com média >= 7:", aprovados);

// C) Alunos com média < 3
let notasMuitoBaixas = alunosComMedia.filter(aluno => {
    return aluno.media < 3;
});

console.log("Alunos com média < 3:", notasMuitoBaixas);