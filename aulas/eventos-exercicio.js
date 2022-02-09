// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links


const linkInterno = document.querySelectorAll("a[href^='#']");


function cliqueLink(event) {
  // prevenindo padrão
  event.preventDefault();  
  // remove todos as classes "ativo" dos links selecionados
  linkInterno.forEach((ativoLink) => {
    ativoLink.classList.remove("ativo");
  });
  // adiciona a classe "ativo" ao link que é clicado
  event.currentTarget.classList.add("ativo");
}

linkInterno.forEach((link) => {
  link.addEventListener("click", cliqueLink);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const elementos = document.querySelectorAll("body *");

function cliqueBody(event) {
  console.log(event.target);
// event.target.remove();

}

elementos.forEach((clica) => {
  clica.addEventListener("click", cliqueBody);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function aumentoDeTexto(event) {
  if (event.key === "t") document.documentElement.classList.toggle("aumento");
}

window.addEventListener("keydown", aumentoDeTexto);


// document.body falando com body
// documento.documentElement falando com html