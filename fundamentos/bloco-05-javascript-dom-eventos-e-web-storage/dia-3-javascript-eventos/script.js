function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

//   Exercicio 1

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function insereDiasDoMes () {
    let blocoDias = document.getElementById('days');

    for (let i in dezDaysList) {
        const day = dezDaysList[i];
        let a = document.createElement('li');

        if (day === 24 | day == 31) {
        a.className = 'day holiday';
        a.innerHTML = day;
        blocoDias.appendChild(a);
        } else if (day === 4 | day === 11 | day === 18) {
        a.className = 'day friday';
        a.innerHTML = day;
        blocoDias.appendChild(a);
        } else if (day === 25) {
        a.className = 'day holiday friday';
        a.innerHTML =  day;
        blocoDias.appendChild(a);
        } else {
        a.className = 'day';
        a.innerHTML = day;
        blocoDias.appendChild(a);
        };
    };
};

  insereDiasDoMes();


//   🚀 Exercício 2:
//   Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
//   Adicione a este botão a ID "btn-holiday".
//   Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function criaBotaoFeriado(feriado) {
    let buttonsContainer = document.querySelector('.buttons-container');
    let botao = document.createElement('button');
    botao.innerHTML = 'feriados';
    botao.id = 'btn-holiday';
    buttonsContainer.appendChild(botao)
}

criaBotaoFeriado();

// 🚀 Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".

function mudaCor () {
    let botaoFeriado = document.querySelector('#btn-holiday');
    let puxaFeriados = document.querySelectorAll('.holiday');
    let corPadrao = 'rgb(238,238,238)';
    let novaCor = 'brown';

    botaoFeriado.addEventListener('click', function() {
        for (let i in puxaFeriados) {
            if (puxaFeriados[i].style.backgroundColor === novaCor) {
                puxaFeriados[i].style.backgroundColor = corPadrao;
            } else {
                puxaFeriados[i].style.backgroundColor = novaCor;
            }
        }
    })
};

mudaCor();

// 🚀 Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday".
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function criaBotaoSexta () {
    let botaoSexta = document.createElement('button');
    let buttonsContainer = document.querySelector('.buttons-container');
    botaoSexta.id = 'btn-friday';
    botaoSexta.innerHTML = 'Sexta-feira';
    buttonsContainer.appendChild(botaoSexta);
};

criaBotaoSexta ();

// 🚀 Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function alteraTextoBotaoSexta () {
    let botaoSexta = document.getElementById('btn-friday');
    let sextaFeira = document.getElementsByClassName('friday');
    let novoTexto = 'Sexta';

    botaoSexta.addEventListener('click', function() {
        for (let i in sextaFeira) {
            if (sextaFeira[i].innerHTML !== novoTexto) {
                sextaFeira[i].innerHTML = novoTexto
            } else {
                sextaFeira[i].innerHTML = sextasDez[i];
            }
        }
    });
}

let sextasDez = [4, 11, 18, 25]
alteraTextoBotaoSexta();

// 🚀 Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target.

function aumentaTextoDia () {
    let days = document.querySelector('#days');
    
    days.addEventListener('mouseover', function(event) {
        event.target.style.fontSize = '35px';
        event.target.style.fontWeight = '600';
    })
};

function diminuiTextoDia () {
    let days = document.querySelector('#days');
    
    days.addEventListener('mouseout', function (event) {
        event.target.style.fontWeight = '200';
        event.target.style.fontSize = '20px';
    })
};

aumentaTextoDia();
diminuiTextoDia ();

// 🚀 Exercício 7:
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function adicionaTarefa (tarefa) {

    let criaSpan = document.createElement('span');
    let divTasks = document.querySelector('.my-tasks');

    criaSpan.innerHTML = tarefa;
    divTasks.appendChild(criaSpan);
}

adicionaTarefa ('cozinhar');

// 🚀 Exercício 8:
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task.
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function addLegenda (cor) {

    let elementoCor = document.createElement('div');
    let divMyTasks = document.querySelector('.my-tasks');

    elementoCor.className = 'task'
    elementoCor.style.backgroundColor = cor;
    divMyTasks.appendChild(elementoCor);
};

addLegenda ('blue');

// 🚀 Exercício 9:
// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected, ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

// function mudaClasse (a) {

//     if (a.className = 'task') {
//         a.classname = 'task-selected'
//     }  
//     if (a.className = 'task-selected') {
//         a.className = 'task'
//     }
// }

// let tasks = document.querySelector('.task');
//     tasks.addEventListener('click', mudaClasse);

function setTaskClass() {
    let selectedTask = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');
    
    myTasks.addEventListener('click', function(event) {
        if (selectedTask.length === 0) {
        event.target.className = 'task selected';
        } else {
        event.target.className = 'task';
        }
    });
};

setTaskClass();

// 🚀 Exercício 10:
// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119).

function setDayColor() {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', function(event){
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor;
        event.target.style.color = color;
      } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
        event.target.style.color = 'rgb(119,119,119)';
      }
    });
};

setDayColor();


// Bônus
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.

function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  getInputField.addEventListener('keyup', function(event) {
    if (event.key === 'Enter' && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
};

addNewTask();
