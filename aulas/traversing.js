const menu = document.querySelector('.menu');

console.log(menu.outerHTML); // todo o html do elemento
console.log(menu.innerHTML); // html interno
console.log(menu.innerText); // texto, sem tags

menu.innerText = '<p>Texto</p>'; // a tag vai como texto
menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada


const lista = document.querySelector('.animais-lista');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

contato.appendChild(lista); // move lista de animais para o final de contato
contato.insertBefore(lista, titulo); // insere a lista antes de titulo
contato.removeChild(titulo); // remove titulo de contato
contato.replaceChild(lista, titulo); // substitui titulo por lista


const animais = document.querySelector('.animais');

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Título';
novoH1.classList.add('titulo');

animais.appendChild(novoH1);
