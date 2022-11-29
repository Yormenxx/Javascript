//Importante tener en cuenta que con la propiedad style del elemento no podremos acceder 
//a propiedades declaradas en una hoja de estilos externa al documento HTML, solamente podremos acceder a los 
//estilos declarados dentro del atributo style del elemento, si queremos consultar propiedades establecidas desde 
//la hoja de estilos externa debemos usar getComputedStyle


// PARA ACCEDER A STYLE Y MODIFICAR ESTILOS EN LINEAS NO ES
//BUENO HACERLO CON LA NOTACION DEL PUNTO

const $linkDom = document.querySelector(".link-dom");

console.log($linkDom.style);
//NOS MUESTRA TODO LOS ELEMENTOS EN MAP 

//PARA ACCEDER A LOS PROPIEDADES CSS SE USA LA NOTACION CAMELCASE
console.log($linkDom.style.backgroundColor);
console.log($linkDom.Style.color)
//CUANDO ACCEDEMOS CON LAS COMPUTED STYLES NOS MUESTRA LOS VALORES QUE EL
//CSS APLICA AL NAVEGADOR 
console.log(window.getComputedStyle($linkDom))

console.log(getComputedStyle($linkDom).getPropertyValue("color"))


//PARA MODIFICAR VALORES
//PODEMOS USAR LA PROPIEDAD SETPROPERTY("PROPIEDAD","VALOR")
$linkDom.style.setProperty("text-decoration","none")
$linkDom.style.setProperty("display","block")
//CON EL PUNTO
$linkDom.style.width="59%"
$linkDom.style.textAlign="center"
$linkDom.style.borderRadius=".5rem"



console.log($linkDom.style);


//VARAIBLES CSS --CUSTOM PROPERTIES


const $html = document.documentElement,
$body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")

let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")

console.log(varDakColor, varYellowColor)

$body.style.backgroundColor= varDarkColor;

$body.style.color = varYellowColor;

//PARA ACCEDER A UN VALOR DE LAS COMPUTED STYLES

getComputedStyle($linkDom).getPropertyValue("backgroundColor")

$linkDom.setProperty("color","white");

