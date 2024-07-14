const object = {
  nombre: "Daniel",
  apellidos: "Clavijo González",
  "algunos-modulos": [
    {
      nombre: "git",
      fecha: "2023-02-15",
    },
    {
      nombre: "react",
      fecha: "2023-03-15",
    }
  ],
  "busqueda-activa": false
}

console.log(object["algunos-modulos"][1].fecha);