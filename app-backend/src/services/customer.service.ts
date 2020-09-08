class CustomerService{
    protected event: any;
    protected db:any;
    constructor(event: any, db:any){
        this.event = event;
        this.db = db;
    }
    async getCustomerDetails(user_email:any){
        return new Promise((resolve, reject) => {
            this.db('customer')
                .where('user_email', user_email)
                .then(customers => {
                    const customer = customers[0];
                    if (!customer) {
                        reject('User not found');
                    }
                    resolve(customer);
                })
        });
    }
}
module.exports = CustomerService;