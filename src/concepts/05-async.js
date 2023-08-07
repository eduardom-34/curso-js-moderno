import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 * @returns {Promise<String>}
 */

export const asyncComponent = ( element ) =>{

    const id1 = '5d86371fd55e2e2a30fe1ccb23';


    findHero( id1 )
        .then( name => element.innerHTML = name )
        .catch( error => element.innerHTML = error )
}

/**
 * 
 * @param {String} id 
 */


const findHero = async( id ) => {

    const hero = heroes.find( hero => hero.id === id)
    return hero?.name; 

}


