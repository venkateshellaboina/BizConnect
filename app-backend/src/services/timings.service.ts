export {};
const BaseService = require('./base.service');
const EmailService = require('./email.service');

class TimingsService extends BaseService{
    protected transaction: any;
    constructor(event: any, db: any){
        super(event, db);
    }
    async get(business_id: number){
        let result = await this.db('timings').where('business_id', business_id)
        return result;
     
    }
    async addTimings(timings: any){
        let result = await this.db('timings').insert(timings);
        return result[0];
    }
    async updateTimings(timings: any){
        let result;
        try{
            this.transaction = await this.db.transaction();
            result = await Promise.all(timings.map(timing =>  this.updateTiming(timing)));
            await this.transaction.commit();
            // let emailService = new EmailService();
            // emailService.sendEmail();
        }
        catch(error){
            console.log('error in transaction commit ' + error);
            this.transaction.rollback();
            return -1;
        }
      
        return result[0];
    }

    async updateTiming(timing: any){
        let timing_id = timing.id;
        delete timing.id;
        let result = await this.transaction('timings').update(timing).where('id', timing_id);
        return timing_id;
    }
}

module.exports = TimingsService;