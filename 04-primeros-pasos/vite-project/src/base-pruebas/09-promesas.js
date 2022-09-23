const {getHeroeById, getHeroesByOwner} = require('./08-imp-exp');

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Tarea
      // importen el
      const p1 = getHeroeById(id);
      if (p1) {
        resolve(p1);
      } else {
        reject("No se pudo encontrar el héroe",id);
      }
    }, 1000);
  });
};

module.exports = getHeroeByIdAsync;

// const resultadoFuncion = async () => {
//     const heroe = await getHeroeByIdAsync(1);
//     console.log(heroe);
//     return heroe;
// }

// resultadoFuncion().then(x => console.log(x));




