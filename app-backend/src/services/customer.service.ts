export {};
const BaseService = require('./base.service');

class CustomerService extends BaseService{
    constructor(event: any, db: any){
        super(event, db);
    }
    async getCustomerDetails(user_email:any){
        let customer = await this.db('customer')
                            .where('user_email', user_email)
                            .then(customers => {
                                const customer = customers[0];
                                return customer;
                            })
        return customer;
    }

    async addCustomerDetails(customer: any){
        let customer_id = await this.db('customer')
                            .insert(customer)
                            .then(result => {
                                console.log(' customer result ' + result);
                                let customer_id = result[0];
                                return customer_id;
                            });
        return customer_id;
    }
}
module.exports = CustomerService;