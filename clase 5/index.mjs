//Funcion
async function obtenerDatos() {
    const respuesta = await fetch ('https://api.escuelajs.co/api/v1/users')
    const usuarios = await respuesta.json() //ARREGLO DE OBJETOS


}