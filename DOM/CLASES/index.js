const $card = document.querySelector(".card")

console.log($card)

console.log($card.className)

console.log($card.classList)
//PODEMOS IDENTIFICAR SI ESA CLASE TIENE ESA PROPIEDAD
console.log($card.classLst.contains(rotate-45))

//PARA AGREGAR ESA PROPIEDAD A ESA CLASE
$card.classList.add("rotate-45")
console.log($card.classList.contains("rotate-45"))

console.log($card.className)
console.log($card.classList)

//PARA QUITAR UNA CLASE

$card.classList.remove("rotate-45")
console.log($card.classList.contains("rotate-45"))

//METODO QUE FUNCIONA COMO UN INTERRUPTOR

$card.classList.toggle("rotate-45")
console.log($card.classList.contains("rotate-45"))}
$card.classList.toggle("rotate-45")
console.log($card.classList.contains("rotate-45"))

//PARA REEMPLAZAR UN VALOR DE UNA CLASE

$card.classList.replace("rotate-45","rotate-125")

//SE PUEDEN AGREGAR MÁS CLASES A LA VEZ CON ADD

$card.classList.add("sepia", "opacity-80")
