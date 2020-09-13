export {};
const BaseService = require('./base.service');

class SubscriptionService extends BaseService{
    constructor(event: any, db: any){
        super(event, db);
    }
    async subscribe(subscribe_mapping: any){
        let subscribed = await this.db('customer_subscription_mapping')
                                .insert(subscribe_mapping)
                                .then(result => result[0]);
        return 'success';
    }
    async unsubscribe(unsubscribe_mapping: any){
        let unsubscribed = await this.db('customer_subscription_mapping')
                                    .where({customer_id: unsubscribe_mapping.customer_id})
                                    .andWhere({business_id: unsubscribe_mapping.business_id})
                                    .del()
                                    .then(result => result[0]);
        return 'success';
    }
}

module.exports = SubscriptionService;