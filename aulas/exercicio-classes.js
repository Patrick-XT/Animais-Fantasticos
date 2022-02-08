// Adicione a classe ativo a todos os itens do menu
const menuAtivo = document.querySelectorAll(".menu a")
function ativo(item){
  item.classList.add("ativo")
}
menuAtivo.forEach(ativo)
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

function ativo(item){
  item.classList.remove("ativo")
}
menuAtivo[0].classList.add("ativo")


// Verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll("img")

function imgAlt(img){
const possuiAtributo = img.hasAttribute("alt");
console.log(possuiAtributo)
}
imgs.forEach(imgAlt)

// Modifique o href do link externo no menu

const linkExterno = document.querySelector("a[href^='./']")

linkExterno.setAttribute("href", "www.chinatemc.com")



