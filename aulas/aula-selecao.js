const animais = document.getElementById("animais")
console.log(animais)

const primeiraLi = document.querySelector("li")
console.log(primeiraLi)

const primeiraUl = document.querySelector("ul")
console.log(primeiraUl)

const linksInternos = document.querySelector("[href^='#']")
console.log(linksInternos.href)

const imgs = document.querySelectorAll(".animais-lista img")
console.log(imgs)

const gridSectionHTML = document.getElementsByClassName("grid-section")
const gridSectionNode = document.querySelectorAll(".grid-section")


// gridSectionNode.forEach(function(item, index){
//   console.log(item)
// })

const arrayGrid = Array.from(gridSectionHTML)

console.log(arrayGrid)
