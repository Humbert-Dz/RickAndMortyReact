const numRandom = () => {
  // obtiene un numero random para representar el id del personaje
  return Math.floor(Math.random() * 826);
};

/**
 * !funcion que hace una peticion al endpoint
 * @param {integer} id de personaje a buscar
 * @returns {Promise}
 */
const sendHTTP = async () => {
  const id = numRandom();

  //hace una peticion al endpoint de la API
  //espera hasta que se resuelva la promesa
  const peticion = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );

  //retorna el cuerpo de la petición, espera hasta que se resuelva
  return await peticion.json();
};

export default sendHTTP;
