const {heroes} = require('../data/heroes');

const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );// Renorta un heroe por id

const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

module.exports = {getHeroeById, getHeroesByOwner};



