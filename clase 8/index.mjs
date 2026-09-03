import express from 'express'

const PUERTO = 3000

const app = express()
app.listen(PUERTO, ()=>{
    console.log(`Servidor express corriendo en el puerto ${PUERTO}`)
})


app.get('/', (req, res)=>{
    // res.end('HOLA EXPRESS')
    res.send('Hola send')
    //res.send({MESSI: 'hola'})
})







