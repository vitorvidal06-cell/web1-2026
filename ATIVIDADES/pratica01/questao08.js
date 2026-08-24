let n = Number(prompt("Quantos números você deseja informar?"));

let soma = 0;

for (let i = 0; i < n; i++) {

    let numero = Number(prompt("Digite um número inteiro positivo:"));

    let primo = true;

    if (numero < 2) {
        primo = false;
    } else {

        for (let i = 2; i < numero; i++) {

            if (numero % i === 0) {
                primo = false;
                break;
            }
        }
    }

    if (primo) {
        soma = soma + numero;
    }
}

console.log("A soma dos números primos é:", soma);