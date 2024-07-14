const obtenerUsuario = (id) => {
  return new Promise((resolve) => {
    let usuario;
    setTimeout(() => {
      if (id === 1) {
        usuario = { id: 1, nombre: "John Doe" };
        resolve(usuario);
      }
    }, 2000);
  });
};

const asyncFunc = async () => {
  console.log(await obtenerUsuario(1));
};
asyncFunc();