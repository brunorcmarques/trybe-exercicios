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

// let palavra = 'arara'
// let palavraAoCont = palavra.reverse()
// console.log(palavraAoCont)