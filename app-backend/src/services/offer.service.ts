export {};
const BaseService = require('./base.service');

class OfferService extends BaseService{
    constructor(event: any, db: any){
        super(event, db);
    };
    async addOffer(offer: any){
        let result = await this.db('offer').insert(offer);
        let offer_id = result[0];
        return offer_id;
    }
    async updateOffer(offer: any){
        let offer_id = offer.offer_id;
        delete offer.offer_id;
        let result = await this.db('offer').update(offer).where('offer_id', offer_id);
        return offer_id;
    }
    async getAllOffers(business_id: number){
        let offerList = await this.db('offer').where('business_id', business_id);
        return offerList;
    }
};

module.exports = OfferService;