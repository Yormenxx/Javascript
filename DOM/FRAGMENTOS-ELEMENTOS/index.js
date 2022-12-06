
//VAMOS A EMPEZAR A CREAR NUESTRAS ETIQUETAS HTML

//EL DOM TIENE UNA PROPIEDAD QUE NOS PERMITE CREAR ELEMENTOS DINAMICAMENTE 

const $figure = document.createElment("figure"),
      $img = document.createElement("img"),
      $figcaption = document.createElement("figcaption"),
      $figcaptionText= document.createTextNode("Animals"),
      $cards = document.querySelector("$cards")
      
//CON APPENDCHILD NOS PERMITE AGREGAR UN NODO AL ELEMENTO

$img.setAttribute("src","https://placeimg.com/200/200/animals")
$img.setAttribute("ALT", "Animals")

$cards.classList.add("card")

$figcaption.appendChild($figcaptionText)
$figure.appendChild($img)
$figure.appendChild($figcaption)
$cards.appendChild($figure)







