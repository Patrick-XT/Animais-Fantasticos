const section = document.querySelector(".animais-lista")

const animaisTop = section.offsetTop
const altura = section.offsetTop;
console.log(altura)

const raposah2 = document.querySelector("h2")

const rect = raposah2.getBoundingClientRect()

console.log(rect)

console.log(raposah2.offsetLeft)
if(rect.top < 0){
  console.log("passou")
}

console.log(pageYOffset)

if(innerWidth < 600){
  console.log("Tela pequena")
}

const smallOrNot = window.matchMedia("(max-width: 600px)")

if(smallOrNot.matches){
  console.log("Tela mobile")
}else {
  console.log("Tela web")
}