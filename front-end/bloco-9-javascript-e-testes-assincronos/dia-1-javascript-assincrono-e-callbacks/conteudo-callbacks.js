// const despesas = [
//     {
//       gym: 99,
//     },
//     {
//       ifood: 200,
//     },
//     {
//       phone: 60,
//     },
//     {
//       internet: 100,
//     },
//   ];
  
// const renda = 1000;

// const despesaMensal = (renda, despesas, callback) => {

// const despesaTotal = callback(despesas);
// const saldoFinal = renda - despesaTotal;

// console.log(`Balanço do mês:
//     Recebido: R$${renda},00
//     Gasto: R$${despesaTotal},00
//     Saldo: R$${saldoFinal},00 `);
// };

// const somaDespesas = (despesas) => {
//   const custoItem = despesas.map((item) => Object.values(item));
//   const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
//   return despesaTotal;
// };

// // acc é a sigla para accumulator (acumulador)
// // curr é a sigla para current (valor atual)

// despesaMensal(renda, despesas, somaDespesas);




// 1 - Adicione uma callback como parâmetro da função getUser.
// No código abaixo você tem a função getUser, que define um objeto com os dados de uma pessoa. Complete a função getUser de forma que ela receba uma função callback como parâmetro para realizar as operações abaixo:
// Insira o retorno da função getUser;
// Complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich";
// Complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian".

// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
// const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// const getUser = (param) => {
//   const userToReturn = {
//     firstName: "Ivan",
//     lastName: "Ivanovich",
//     nationality: "Russian"
//   };
//   return param(userToReturn);
// };

// console.log(getUser(userFullName)); // complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich"
// console.log(getUser(userNationality)); // complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian"


// 2 - Passe, como parâmetro e como retorno, uma callback para a função getUser.
// No código abaixo você tem a função getUser modificada, que agora funciona de modo assíncrono e imprime dados de uma pessoa depois de um certo tempo. Complete a função getUser de forma que ela receba uma callback como parâmetro e a retorne para que possa realizar as operações abaixo sobre a pessoa:
// Insira uma callback como parâmetro da função getUser;
// Retorne a callback passada como parâmetro na função getUser;

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = callback => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    // Retorne a `callback` passada como parâmetro na função `getUser`
    // Dica: você pode manter o `console.log()`
    console.log(callback(user));
  }, delay());
  
};

getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo