// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// Exemplo de palíndromo: arara.
// verificaPalindrome('arara');
// Retorno esperado: true
// verificaPalindrome('desenvolvimento');
// Retorno esperado: false

function verificaPalindrome(palavra) {
    let palavraAoCont = palavra.split('').reverse().join('');
    if (palavra === palavraAoCont) {
        return true;
    } else {
        return false;
    }
}

console.log(verificaPalindrome('arara'));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// array teste:  [2, 3, 6, 7, 10, 1]

function indiceDoMaior(numeros) {
    let indiceMaior = 0;
    for (let indice in numeros) {
        if(numeros[indiceMaior] < numeros[indice]) {
        indiceMaior = indice;
        }
    }
    return indiceMaior;
}

console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// Array de teste: [2, 4, 6, 7, 10, 0, -3];

function indiceDoMaior(numeros) {
    let indiceMaior = 0;
    for (let indice in numeros) {
        if (numeros[indiceMaior] > numeros[indice]) {
        indiceMaior = indice;
        }
    }
    return indiceMaior;
}

console.log(indiceDoMaior([2, 4, 6, 7, 10, 0, -3]));

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']

function retornaMaiorNome(nomes) {
    let maiorNome = nomes[0];
    for (let indice in nomes) {
        if (nomes[indice].length > maiorNome.length) {
            maiorNome = nomes[indice];
        }
    }
    return maiorNome;

}

console.log(retornaMaiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// 🚀 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// Array de teste: [2, 3, 2, 5, 8, 2, 3];

function numeroQueMaisRepete(numeros) {
    let maiorNumDeRepeticoes = 0;
    let contadorDeRepeticoes = 0;
    let indexNumeroComMaisRepeticoes = 0;
    for (let index in numeros) {
        let verificaNumero = numeros[index];
        for (let index2 in numeros) {
            if (verificaNumero === numeros[index2]) {
                contadorDeRepeticoes += 1;
            }
        }
    if (contadorDeRepeticoes > maiorNumDeRepeticoes) {
        maiorNumDeRepeticoes = contadorDeRepeticoes;
        indexNumeroComMaisRepeticoes = index;
    }
    contadorDeRepeticoes = 0;
    }
    return numeros[indexNumeroComMaisRepeticoes];
}

console.log(numeroQueMaisRepete([2, 3, 8, 5, 8, 2, 8]));