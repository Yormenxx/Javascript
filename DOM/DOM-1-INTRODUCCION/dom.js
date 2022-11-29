//CON DOCUMENT ACCEDEMOS A LOS ELEMENTOS DE LA VENTANA NO CONFUNDIR CON WINDOW
console.log("------INTRODUCCION AL DOM")


console.log(window.document)
console.log(document)
console.log(document.head)
console.log(document.body)
console.log(document.documentElement)
console.log(document.doctype)
console.log(document.characterSet)
console.log(document.title)
console.log(document.links)
console.log(document.scripts)


//CUANDO SELECCIONAMOS ALGO EN EL DOCUMENTO Y QUEREMOS MOSTRARLO

setTimeout(() => {
    console.log(document.getSelection().toString())
    
}, 3000);


document.write("<h2>hola mundo desde el dom</h2>")
