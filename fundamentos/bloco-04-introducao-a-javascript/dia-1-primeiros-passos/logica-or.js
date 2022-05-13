// Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".
// Implemente condicionais para que:
// Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".
// Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU".

let weekDay = "Segunda"
let message = ""

if (weekDay === "Sábado") {
    message = "FINALMENTE, descanso merecido UwU"
}
else if (weekDay === "Domingo") {
    message = "FINALMENTE, descanso merecido UwU"
}
else {
    message = "Oba, mais um dia de aprendizado na Trybe >:D"
}

console.log(message)