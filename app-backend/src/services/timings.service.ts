export {};
const BaseService = require('./base.service');

class TimingsService extends BaseService{
    constructor(event: any, db: any){
        super(event, db);
    }
    async get(business_id: number){
        let timings = await this.db('timings')
                .where('business_id', business_id)
                .then(result => result);
        return timings;
     
    }
}

module.exports = TimingsService;