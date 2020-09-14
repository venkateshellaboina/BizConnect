export {};
const BaseService = require('./base.service');

class LocationService extends BaseService{
    constructor(event: any, db: any){
        super(event, db);
    }
    async getLocation(id: number){
        console.log('location id : ' + id);
        let result = await this.db('location_details').where('location_id', id);
        let location:any = result[0];
        return location;
    }

    async addLocation(location: any){
        let result = await this.db('location_details').insert(location)
        let location_id = result[0];
        return location_id;        
    }
}

module.exports = LocationService;