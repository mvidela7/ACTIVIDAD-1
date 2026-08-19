/*
USO DE MODULOS BUILT-IN
CON EL SISTEMA DE MODULOS MODERNO
*/
 import os from 'node:os'
 //import { readFile } from 'node:fs/promises' manera 1
 import fsp  from 'node:fs/promises'

 const contenido = await fsp.readFile('./texto.txt','utf8')
 console.log(contenido)
 //console.log(os.freemem() - os.totalmem())
