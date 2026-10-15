import {Pool} from 'pg'

const pool = new Pool({
    user: process.env.BD_USER,
    password: process.env.BD_PASS,
    database: process.env.BD_BD,
    port: process.env.BD_PORT,

})

export default Pool