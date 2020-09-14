export {};
const BaseService = require('./base.service');

class TimingsService extends BaseService{
    constructor(event: any, db: any){
        super(event, db);
    }
    async get(business_id: number){
        let result = await this.db('timings').where('business_id', business_id)
        return result;
     
    }
}

module.exports = TimingsService;