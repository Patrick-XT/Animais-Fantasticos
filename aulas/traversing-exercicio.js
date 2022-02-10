// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu")
const footer = document.querySelector(".footer")

cloneMenu = menu.cloneNode(true)

footer.appendChild(cloneMenu)

// Selecione o primeiro DT da dl de Faq

const faq = document.querySelector(".faq-lista")
console.log(faq.children[0])

// Selecione o DD referente ao primeiro DT
const faqDd = document.querySelector(".faq-lista")
console.log(faqDd.children[1])

// Substitua o conteúdo html de .faq pelo de .animais

const faqZada = document.querySelector(".faq")
const animais = document.querySelector(".animais")

faqZada.innerHTML = animais.innerHTML


