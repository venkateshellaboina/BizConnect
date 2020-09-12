export {};
const LocationService = require('./location.service');

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
    async addBusinessDetails(business: any){
        let location = business.location;
        let locationService: any = new LocationService(this.event, this.db);
        let location_id = await locationService.addLocation(location);
        delete business.location;
        business.location_id = location_id;
        return new Promise( (resolve, reject) => {
            this.db('business_details')
                .insert(business)
                .then( result => {
                    let business_id = result[0];
                    resolve(business_id);
                })
                .catch( (err) => { console.log('Error inserting record to business_details'); reject(err)} )
        })
    }
}

module.exports = BusinessService;