export {};
const BaseService = require('./base.service');

class BusinessService extends BaseService{
    constructor(event: any, db: any){
        super(event, db);
    }
    async getBusinessDetails(email: string){
        let business =  await this.db('business_details')
                                .where('user_email', email)
                                .then( businesses => {
                                    let business = businesses[0];
                                    return business;
                                });
        return business;
    }
    async getAll(category: string, searchKey: string){
        let businessList = await this.db('business_details')
                                    .where('category', category)
                                    .then(result => result);
        return businessList;
    }
    async addBusinessDetails(business: any, LocationService: any){
        let location = business.location;
        let location_id = await LocationService.addLocation(location);
        delete business.location;
        business.location_id = location_id;
        let business_id = await this.db('business_details')
                            .insert(business)
                            .then( result => {
                                let business_id = result[0];
                                return business_id;
                            })
                            .catch( (err) => { console.log('Error inserting record to business_details'); return err} )
        return business_id;
    }
    
}

module.exports = BusinessService;