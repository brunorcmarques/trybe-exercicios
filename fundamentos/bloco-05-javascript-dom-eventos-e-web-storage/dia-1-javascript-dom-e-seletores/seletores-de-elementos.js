// Agora você! Faça o seguinte:
// Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
// Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
// Por fim, recupere o subtítulo e altere-o também.


document.getElementById('page-title').innerText = 'Meu filme favorito é Interstellar'
document.getElementById('paragraph').style.color = 'white';
document.getElementById('paragraph').style.background = 'black';
document.getElementById('paragraph').style.fontFamily = 'arial';
document.getElementById('subtitle').innerText = 'Esse é um subtitulo completamente alterado';
document.getElementById('subtitle').style.color = 'red';

// Utilizando o mesmo template de exercício anterior:
// Adicione uma classe igual para os dois parágrafos.
// Recupere os seus parágrafos via código JavaScript, usando a função getElementsByClassName;
// Altere algum estilo do primeiro deles.
// Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName.

document.getElementsByClassName('paragrafo-maneiro')[0].style.color = 'pink';
document.getElementsByClassName('paragrafo-maneiro')[0].style.background = 'brown';
document.getElementsByClassName('paragrafo-maneiro')[0].innerText += ' obs: Esse paragrafo maneiro teve seu estilo modificado via JS';
document.getElementsByTagName('h4')[0].style.color = 'grey';
document.getElementsByTagName('h4')[0].style.fontFamily = 'Arial';
