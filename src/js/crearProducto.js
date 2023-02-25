const form = document.querySelector('form')

form.addEventListener('submit', e =>{
    const nombreProducto= document.querySelector('#nombre').value
    const precioProducto= document.querySelector('#precio').value
    const descripcionProducto= document.querySelector('#descripcion').value
    console.log(nombreProducto, precioProducto, descripcionProducto)
    e.preventDefault()
})
