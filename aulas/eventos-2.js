// primeiro passo
const imgs = document.querySelectorAll("img")

// quarto passo
function imgSrc(event){
  const src = event.target.getAttribute("src")
  console.log(src)
}

// terceiro passo
function cliqueImagem(img){
img.addEventListener("click", imgSrc)
}
// segundo passo
imgs.forEach(cliqueImagem)