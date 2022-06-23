// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const respostasDosAlunos = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const gabaritoMatematica = ['C', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];

// 	let pontos = 0;
// 	for (let i = 0; i < respostasDosAlunos.length; i += 1) {
// 		if (respostasDosAlunos[i] === 'N.A') {pontos += 0}
// 		else if (respostasDosAlunos[i] === gabarito[i]) {pontos += 1}
// 		else {pontos -= 0.5}
// 	}

// console.log(pontos)

const checagem = (gab, resp) => {
	let pontos = 0;
	for (let i = 0; i < resp.length; i += 1) {
		if (resp[i] === 'N.A') {pontos += 0}
		else if (resp[i] === gab[i]) {pontos += 1}
		else {pontos -= 0.5}
	}
	return pontos;
}

const checagem2 = (gab, resp) => {
	let pontos = 0;
	for (let i = 0; i < resp.length; i += 1) {
		if (resp[i] === 'N.A') {pontos += 0}
		else if (resp[i] === gab[i]) {pontos += 3}
		else {pontos -= 0.5}
	}
	return pontos;
}

const nota = (gabaritoFinal, respostasDosAlunosFinal, callback) => {
	return callback(gabaritoFinal, respostasDosAlunosFinal)
}

console.log(nota(gabarito, respostasDosAlunos, checagem));
console.log(nota(gabaritoMatematica, respostasDosAlunos, checagem2));


// console.log(gabarito)
// console.log(respostasDosAlunos)
