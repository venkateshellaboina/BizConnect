
class BusinessService{
    protected event;
    protected db;
    constructor(event: any, db: any){
        this.event = event;
        this.db = db;
    }
    async getBusinessDetails(email: string){
        return new Promise( (resolve, reject) => {
            this.db('business_details')
                .where('user_email', email)
                .then( businesses => {
                    if(!businesses){
                        reject('No Businesses found');
                    }
                    else{
                        let business = businesses[0];
                        resolve(business);
                    }
                })
        })
    }
}

module.exports = BusinessService;