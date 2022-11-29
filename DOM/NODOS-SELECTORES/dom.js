//Obtener elemento po su nombre de etiqueta o tag
console.log(document.getElementsByTagName("h3"))

//Obtener elemento por su nombre de clase
console.log(document.getElementsByClassName("card"))

//Obtener un elemento de los forms

console.log(document.getElementsByName("nombre"))

//Obtener elemento por id
console.log(document.getElementById("menu"))

//Obtener elemento por etiqueta
//Solo trae el primer elemento que haya encontrado la coincidencia a pesarde que hayan más
//para traeros todos usamos querySelectorAll
console.log(document.querySelector("#menu"))
console.log(document.querySelectorAll("a"))
console.log(document.querySelectorAll("a").length)

document.querySelectorAll("a").forEach((el) => console.log(el))


console.log(document.querySelector(".card"))
console.log(document.querySelectorAll(".card"))
console.log(document.querySelectorAll(".card")[2])


console.log(document.querySelectorAll("#menu li"))
console.log(document.querySelector("#menu li"))
