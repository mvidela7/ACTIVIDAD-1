import { writeFile, readFile } from "fs/promises";
import path from "path";

const ruta = path.join(process.cwd(), "usuarios.json");

async function obtenerDatos() {
  try {
    console.log("1. Empezó la función");

    const respuesta = await fetch("https://api.escuelajs.co/api/v1/users");
    console.log("2. Fetch OK:", respuesta.status);

    const usuarios = await respuesta.json();
    console.log("3. Cantidad de usuarios:", usuarios.length);

    const datos = usuarios.map(usuario => ({
      id: usuario.id,
      name: usuario.name,
      email: usuario.email,
    }));

    await writeFile(ruta, JSON.stringify(datos, null, 2));
    console.log("4. Archivo creado");

    const archivo = await readFile(ruta, "utf-8");
    console.log("5. Archivo leído");
    console.log(JSON.parse(archivo));

  } catch (error) {
    console.log("ERROR:", error);
  }
}

obtenerDatos();