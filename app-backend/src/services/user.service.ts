export {};
const BaseService = require('./base.service');

class UserService extends BaseService{
    constructor(event: any, db: any){
        super(event, db);
    }
    async getUser(user_email:any, CustomerService, BusinessService){
        let result = await this.db('user').where('user_email', user_email);
        let user = result[0];
        if(user.type == 'customer'){
          
            let customer = await CustomerService.getCustomerByEmail(user.user_email);
            user.id = customer.customer_id;
        }
        else if(user.type == 'business'){
            let business = await BusinessService.getBusinessByEmail(user.user_email);
            user.id = business.business_id;
        }
        return user;
    }
    async addUser(user: any, CustomerService){
        let result = await this.db('user').insert(user);
        if(user.type == 'customer'){
            let customer: any = {};
            customer.first_name = user.first_name;
            customer.last_name = user.last_name;
            customer.contact_no = user.contact_no;
            customer.user_email = user.user_email;
            console.log('add customer : '+ JSON.stringify(customer));
            let result = await CustomerService.addCustomerDetails(customer);
            console.log('add customer id : '+ result);

        }
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