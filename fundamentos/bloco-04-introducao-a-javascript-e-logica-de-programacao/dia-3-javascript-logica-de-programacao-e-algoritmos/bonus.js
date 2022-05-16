// 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

let n = 10;
let asterisco = "*";
let linha = "";

for (let index = 0; index < n; index += 1) {
    linha += asterisco
}

for (let index = 0; index < n; index += 1) {
    console.log(linha)
}

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

let linha2 = '';
let asterisco = "*";

for (let index = 0; index < 5; index += 1) {
    linha2 += asterisco;
    console.log(linha2);
}

// 3- Agora inverta o lado do triângulo. Por exemplo:
// Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

let n = 5;
let linha3 = '';
let asterisco = "*";
let posicao = n;

for (linhaIndex = 0; linhaIndex < n; linhaIndex += 1) {
    for (let colunaIndex = 0; colunaIndex <= n; colunaIndex += 1) {
        if (colunaIndex < posicao) {
            linha3 = linha3 + " ";
        } else {
            linha3 = linha3 + asterisco;
        }
    }
    console.log(linha3);
    linha3 = "";
    posicao -= 1;
}

// 4- Depois, faça uma pirâmide com n asteriscos de base:

let n = 10;
let linha4 = '';
let asterisco = "*";

let meioDaMatrix = (n + 1) /2
let controleEsquerda = meioDaMatrix
let controleDireita = meioDaMatrix

for (let linhaIndex = 0; linhaIndex <= meioDaMatrix; linhaIndex += 1) {
    for (let colunaIndex = 0; colunaIndex <= n; colunaIndex += 1) {
        if (colunaIndex > controleEsquerda && colunaIndex < controleDireita) {
            linha4 = linha4 + asterisco;    
        } else {
            linha4 = linha4 + ' ';
        }
    }   
    console.log(linha4);
    linha4 = '';
    controleEsquerda -= 1;
    controleDireita += 1;
};