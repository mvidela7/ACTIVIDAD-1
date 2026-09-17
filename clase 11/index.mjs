import express from "express";

const PUERTO = 3000;

const datos = [
  {
    compu: "PC-163",
    activo: true,
  },
];

const app = express();
app.listen(PUERTO);

app.use(express.json());

app.get("/estado", (req, res) => {
  res.json(datos);
});

app.post("/estado", (req, res) => {
  datos.push(req.body);
  res.json(datos);
});
