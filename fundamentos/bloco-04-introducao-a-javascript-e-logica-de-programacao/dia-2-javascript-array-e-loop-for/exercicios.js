let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

console.log("exercicio 1:")
for (let number of numbers) {
    console.log(number)
}

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

console.log("exercicio 2:")

let somaDosValores = 0;

for (let index = 0; index < numbers.length; index += 1) {
    somaDosValores += numbers[index];
}

console.log(somaDosValores);

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array; 
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

console.log("exercicio 3:")

console.log(somaDosValores / numbers.length)

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

console.log("exercicio 4:")

if ((somaDosValores / numbers.length) > 20) {
    console.log("valor maior que 20")
    } else {
    console.log("valor menor ou igual a 20")
    }

// 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;

console.log("exercicio 5:")

let maiorValor = 0;
for (let index2 = 0; index2 < numbers.length; index2 += 1) {
    if (numbers[index2] > maiorValor) {
        maiorValor = numbers[index2]
    }
}
console.log(maiorValor);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

console.log("exercicio 6:")

let contagemDeImpares = 0

for (let index3 = 0; index3 < numbers.length; index3 += 1) {
    if (numbers[index3] % 2 !== 0) {
        contagemDeImpares += 1;
    }
}
if (contagemDeImpares === 0) {
    console.log("nenhum valor ímpar encontrado");
} else {
    console.log(contagemDeImpares);
}

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

console.log("exercicio 7:")

let menorValor = numbers[0]

for (let index4 = 1; index4 < numbers.length; index4 += 1) {
    if (menorValor > numbers[index4]) {
        menorValor = numbers[index4]
    }
}
 
console.log(menorValor)

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

console.log("exercicio 8:")

let array = []

for(let index5 = 1; index5 < 26; index5 += 1) {
    array.push(index5);
}

console.log(array)

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

console.log("exercicio 9:")

for(index6 = 0; index6 < array.length; index6 += 1) {
    console.log(array[index6] / 2)
}