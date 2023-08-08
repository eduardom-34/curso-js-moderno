

export class Users {

    /**
     * 
     * @param {Like<User>} usersDataLike 
     */

    constructor({ id, isActive, balance, avatar, firstName, lastName, gender }) {
        this.id       = id;
        this.isActive = isActive;
        this.balance  = balance;
        this.avatar   = avatar;
        this.firstName = firstName;
        this.lastName  = lastName;
        this.gender    = gender;
    }

} 