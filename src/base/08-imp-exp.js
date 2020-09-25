// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
// import heroes, { owners } from '../data/heroes';
// import heroes from '../data/heros';
import heros from "../data/heros";

// console.log( owners );




export const getHeroeById = (id) => heros.find( (heroe) => heroe.id === id );

// console.log( getHeroeById(2) );

// find?, filter
export const getHeroesByOwner = ( owner ) => heros.filter( (heroe) => heroe.owner === owner );

// console.log( getHeroesByOwner('Marvel') );


