const imgs = document.querySelector("img")
function cliqueImg(event){
console.log(event.target)
}

imgs.addEventListener("click", cliqueImg)


const animaisLista = document.querySelector(".animais-lista")

function animaisClique(event){
console.log(event.target)
}

animaisLista.addEventListener("click", animaisClique )

const linkExterno = document.querySelector("a[href^='https']");

function cliqueNoLink(event){
  event.preventDefault()
  // console.log(event.currentTarget.href)
  console.log(this.getAttribute("href"))
}

linkExterno.addEventListener("click", cliqueNoLink)

const h1 = document.querySelector("h1")

function eventoClique(event){
  console.log(event.type, event)
}

h1.addEventListener("click", eventoClique)

window.addEventListener("keydown", eventoClique)

function eventoAzul(event){
  if(event.key === "a")
  document.body.classList.toggle("azul")
 else if(event.key === "v")
 document.body.classList.toggle("vermelho")
}

window.addEventListener("keydown", eventoAzul)