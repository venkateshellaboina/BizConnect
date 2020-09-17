export {};
const BaseService = require('./base.service');

class CustomerService extends BaseService{
    constructor(event: any, db: any){
        super(event, db);
    }
    async getCustomerDetails(customer_id:number){
        let result = await this.db('customer').where('customer_id', customer_id)
        let customer = result[0];           
        return customer;
    }

    async getCustomerByEmail(user_email: string){
        let result = await this.db('customer').where('user_email', user_email);
        let customer = result[0];
        return customer;
    }

    async addCustomerDetails(customer: any){
        let result = await this.db('customer').insert(customer);
        let customer_id = result[0];
        return customer_id;
    }
}
module.exports = CustomerService;