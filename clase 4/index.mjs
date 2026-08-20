//Paso 1 importar modulo
import { error } from 'node:console'
import fsp  from 'node:fs/promises'
import path from 'node:path'



//Creamos una variable 
const ruta = path.join ('./usuario.json')
let usuario = ''
try{

//Agregamos el await porque es una promise
usuario = await fsp.readFile(ruta, 'utf-8')
}
catch(error)
{
console.log(error.message)
}
const ObjetoUsuario = JSON.parse(usuario)
console.log(ObjetoUsuario.nombre)

//Escribir archivo
try
{
  const ruta =  path.join ('./saludo.txt')
  await fsp.writeFile(ruta, 'Escribiendo archivo',{
    escondig :'utf-8',
    flag: 'a'
})
}
catch(error)
{
    console.log(error)

}
 


