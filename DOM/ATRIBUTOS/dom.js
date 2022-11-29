//accedemos a los valores de las etiquetas con la notacion del punto 


console.log(document.documentElement.lang)

console.log(document.documentElement.getAttribute("lang"))

console.log(document.querySelector(".link-dom").href)


console.log(document.querySelector(".link-dom").getAttribute("href"))

//Para cambiar el valor

document.documentElement.lang="en";

console.log(document.documentElement.getAttribute("lang"))

//con setAttribute("nombreatributo", "valor atributo")
document.documentElement.setAttribute("lang","es-MX")

console.log(document.documentElement.getAttribute("lang"))
