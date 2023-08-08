import { Users } from "../models/users"

/**
 * 
 * @param {Like<User>} localhostUser 
 * @returns {User}
 */
export const localHostUsertoModel = ( localhostUser ) => {
    
    const {
        avatar,
        balance,
        first_name,
        gender,
        id,
        isActive,
        last_name,
    } = localhostUser;
    
    return new Users({
        avatar,
        balance,
        firstName: first_name,
        gender,
        id,
        isActive,
        lastName: last_name,
    });

}
