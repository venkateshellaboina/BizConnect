export {};
const BaseService = require('./base.service');

class LocationService extends BaseService{
    constructor(event: any, db: any){
        super(event, db);
    }
    async getLocation(business_id: number){
        console.log('location business id : ' + business_id);
        let result = await this.db('location_details').where('business_id', business_id);
        let location:any = result[0];
        return location;
    }

    async addLocation(location: any){
        let result = await this.db('location_details').insert(location)
        let location_id = result[0];
        return location_id;        
    }
    async updateLocation(location: any){
        let location_id = location.location_id;
        delete location.location_id;
        let result = await this.db('location_details').update(location).where('location_id', location_id);
        // let location_id = result[0];
        return result[0];        
    }
}

module.exports = LocationService;