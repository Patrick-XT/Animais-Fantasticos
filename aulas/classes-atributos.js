const menu = document.querySelector(".menu")
menu.classList.add("ativo")
menu.classList.remove("ativo")
menu.classList.toggle("ativo")

const animais = document.querySelector(".animais")
console.log(animais.attributes["data-texto"])

// classList e attributes exemplos de propriedade de somente leitura


const img = document.querySelector("img")
console.log(img.getAttribute("alt"))
img.setAttribute("alt", "É uma raposa")