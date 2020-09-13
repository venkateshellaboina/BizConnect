export {};
const BaseService = require('./base.service');

class LocationService extends BaseService{
    constructor(event: any, db: any){
        super(event, db);
    }
    async getLocation(id: number){
        console.log('location id : ' + id);
        let location = await this.db('location_details')
                                .where('location_id', id)
                                .then(result => {
                                    console.log('result ' + result);
                                
                                    let location:any = result[0];
                                    return location;
                                });
        return location;
     
    }

    async addLocation(location: any){
        let location_id = await this.db('location_details')
                .insert(location)
                .then( result => result[0]);
        return location_id;        
    }
}

module.exports = LocationService;