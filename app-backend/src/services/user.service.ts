export {};
const BaseService = require('./base.service');

class UserService extends BaseService{
    constructor(event: any, db: any){
        super(event, db);
    }
    async getUser(user_email:any){
        let result = await this.db('user').where('user_email', user_email)
        let user = result[0];
        return user;
    }
    async addUser(user: any){
        let result = await this.db('user').insert(user);
        return user.user_email;
    }

    async updateUser(user: any){
        let user_email = user.user_email;
        delete user.user_email;
        let result = await this.db('user').update(user).where('user_email', user_email)
        return user_email;
    }
}
module.exports = UserService;