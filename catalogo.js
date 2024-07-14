
function crearCatalogo() {
  let catalogo = [];

  const agregarCancion = (nombre, genero, duracion) => {
    const cancion = {
      nombre,
      genero,
      duracion
    };
    catalogo.push(cancion);
  };

  const listarCanciones = () => {
    if (catalogo.length === 0) {
      console.log('no hay canciones');
    } else {
      console.log('Canciones en el catálogo:');
      catalogo.forEach((cancion, index) => {
        console.log(`[${index + 1}] nombre: ${cancion.nombre}, genero: ${cancion.genero}, duracion: ${cancion.duracion}`);
      });
    }
  };

  const buscarPorGenero = (genero) => {
    const cancionesPorGenero = catalogo.filter(cancion => cancion.genero === genero);
    if (cancionesPorGenero.length === 0) {
      console.log(`No hay canciones de "${genero}"`);
    } else {
      console.log(`Canciones de "${genero}":`);
      cancionesPorGenero.forEach((cancion, index) => {
        console.log(`[${index + 1}] Nombre: ${cancion.nombre}, Duración: ${cancion.duracion} minutos`);
      });
    }
  };

  const calcularPromedioDuracion = () => {
    if (catalogo.length === 0) {
      console.log('el catálogo está vacío.');
    } else {
      let duraciones = 0;
      let quantity = 0;
      for (const cancion of catalogo) {
        duraciones += cancion.duracion;
        quantity++;
      }
      console.log(`El promedio de duración de las canciones es: ${duraciones / quantity}`);
    }
  };

  return {
    agregarCancion,
    listarCanciones,
    buscarPorGenero,
    calcularPromedioDuracion
  };
};