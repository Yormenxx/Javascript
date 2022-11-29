
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









