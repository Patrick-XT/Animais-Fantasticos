// Verifique a distância da primeira imagem
// em relação ao topo da página
const distImg = document.querySelector("img");
console.log(distImg.offsetTop);

// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const imgWidthSoma = document.querySelectorAll("img");
  let soma = 0;
  function larguraSoma(item) {
    soma += item.offsetWidth;
  }
  imgWidthSoma.forEach(larguraSoma);
  console.log(soma);
}
window.onload = function () {
  somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const verificaLink = document.querySelectorAll("a");

verificaLink.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeigth = link.offsetHeight;
  if (linkWidth >= 48 && linkHeigth >= 48) {
    console.log("Possui acessibilidade");
  } else {
    console.log("Não possui acessibilidade");
}

});
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menuMobile = window.matchMedia("(max-width: 720px)");
if (menuMobile.matches) {
  const addMenu = document.querySelector(".menu");
  addMenu.classList.add("menu-mobile");
}
