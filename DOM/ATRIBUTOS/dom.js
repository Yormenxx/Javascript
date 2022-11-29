//accedemos a los valores de las etiquetas con la notacion del punto 

// TODOS LOS ATRIBUTOS TIENEN UN VALOR ASI: ATRIBUTO="VALOR"
// PARA ACCEDER AL VALOR DEL ATRIBUTO USAMOS LA NOTACION DEL PUNTO O CON GETATTRIBUTE("NOMBREATRIBUTO")

console.log(document.documentElement.lang)

console.log(document.documentElement.getAttribute("lang"))

console.log(document.querySelector(".link-dom").href)


console.log(document.querySelector(".link-dom").getAttribute("href"))

//Para cambiar el valor

//LO MISMO OCURRE SI QUEREMOS CAMBIAR EL VALOR USAMOS LA NOTACION DEL PUNTO O SETATTRIBUTE("NOMBRE ATRIBUTO","VALOR ATRIBUTO")

document.documentElement.lang="en";

console.log(document.documentElement.getAttribute("lang"))

//con setAttribute("nombreatributo", "valor atributo")
document.documentElement.setAttribute("lang","es-MX")

console.log(document.documentElement.getAttribute("lang"))


// PODEMOS TRAERNOS LOS ELEMENTOS DEL DOM Y GUARDARLAS EN VARIABLES- POR TANTO USAMOS

const $link = document.querySelectorAll(".link-dom");


$link.setAttribute("target", "_blank")
$link.setAttribute("rel", "noopener")
$link.setAttribute("href", "https://youtube.com/ejemplo")


//PARA  SABER SI TIENE UN ATRIBUTO
console.log($link-dom.hasAttribute("rel"))

//PARA ELIMINAR EL TRIBUTO

$link-dom.removeAttirbute("rel")


//PARA TRABAJAR CON LOS DATA - ATTIRUBTES

//TENEMOS LA NOTACION DEL PUNTO Y GET Y SET

console.log($link-dom.getAttribute("data-description"));


// SI QUEREMOS VER TODO LOS DATA DEL ELEMENTO
console.log($link-dom.dataset)
// SI QUEREMOS ACCEDER A UNO LO HACEMOS CON LA NOTACION DEL PUNTO
console.log($link-dom.dataset.description)


$link.setAttribute("data-description","Modelo del documento")

console.log($link-dom.dataset.description)

$link-dom.description = "Entra a una nueva froma de cambiar los valores"












