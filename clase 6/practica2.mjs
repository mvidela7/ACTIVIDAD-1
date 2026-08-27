const productos =[{
    nombre: 'pantalon',
    precio: 100
    },
    {
        nombre: 'remera',
        precio: 50

    }
]

//Filter

//Devuelveun nuevo arreglo
const pFiltrados = productos.filter((producto)=>{

return Number (producto.precio ) < 100

})
console.log(pFiltrados)


