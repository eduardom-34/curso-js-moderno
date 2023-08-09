import { localHostUsertoModel } from '../mappers/localhost-user.mapper';
import { User } from '../models/user';

/**
 * 
 * @param {String|Number} id 
 * @returns { Promise<User>}
 */

export const getUserbyId = async( id ) => {

    const url = `${ import.meta.env.VITE_BASE_URL}/users/${ id }`;
    const res = await fetch (url);
    const data = await res.json();

    const users = localHostUsertoModel( data );

    return users;
}