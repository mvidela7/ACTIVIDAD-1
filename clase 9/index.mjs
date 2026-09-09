import express from 'express'

const PUERTO = 3000

const app = express()
app.listen(PUERTO, ()=>{
    console.log(`Servidor express corriendo en el puerto ${PUERTO}`)
})


app.get('/', (req, res)=>{
    const usuarios = [
        {
            nombre: 'Mateo',
            email: 'videlamateo3@gmail.com'

        },
        {
            nombre: 'MateoVidela',
            email: 'mateo3@gmail.com'


        }
    ]
    res.json(usuarios)
})

app.get('/saludo', (req, res)=>{
    res.json({mensaje : 'Hola'})
})

app.get('/:id', (req, res)=>{
    const id =  req.params.id
    res.json({mensaje : 'Consulta por id' +  id})
    //1 se filtra a partir del id del usuario
    //condicion el id de parametro debe ser igual al id del objeto usuario
    const usuariosFiltrados = usuarios.filter((usuario) =>{
        return usuario.id === id
    })
    if(usuariosFiltrados.length > 0){
        res.json(usuariosFiltrados)
    } else{
        res.json({Mensaje : 'usuario no encontrado'})
    }
   

})

//Rutas con parametros
app.post('/:id', (req, res)=>{
    const id = Number (req.params.id) //NaN
    const usuarios = [
        {
            id: 1,
            nombre: 'Mateo',
            email: 'videlamateo3@gmail.com'
        },
        {
            id: 2,
            nombre: 'MateoVidela',
            email: 'mateo3@gmail.com'
        }
        
    ]
    
})

