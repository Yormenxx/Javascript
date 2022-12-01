//NOS AYUDA A RECORRER EL DOM , CON EL OBJETIVO DE IDNETIFICAR QUIEN ES PADRE O HIJO
//DE LOS ELEMENTOS
//SIEMPRE HAY QUE TRABAJAR CON ELEMENT por que hay 12 TIPOS DE NODOS

const $cards = document.querySelector(".cards");

console.log($cards)

console.log($cards.children)
console.log($cards.firstElementChild)
console.log($cards.lastElementChild)
console.log($cards.children.[2])
console.log($cards.parentElement)

console.log($card.nextElementSibling)
console.log($card.previousElementSibling)

//busca el ancestro más cercano que le especifiquemos
console.log($cards.closest("section"))
