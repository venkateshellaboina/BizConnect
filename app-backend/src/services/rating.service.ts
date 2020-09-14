export{};
const BaseService = require("./base.service");

class RatingService extends BaseService{
    constructor(event:any, db:any){
        super(event, db);
    }
    async addRating(rating: any){
        let result = await this.db('ratings').insert(rating);
        let rating_id = result[0];
        return rating_id;
    }
    async updateRating(rating: any){
        let rating_id = rating.id;
        delete rating.id;

        let result = await this.db('ratings').update(rating).where('id', rating_id);
        return result[0];
    }
    async getAllRatings(business_id: number){
        let ratings = await this.db.select('*').from('ratings').leftOuterJoin('customer', {'ratings.customer_id' : 'customer.customer_id'}).where('ratings.business_id', business_id)
                                .union([
                                    this.db.select('*').from('ratings').rightJoin('customer', {'ratings.customer_id' : 'customer.customer_id'}).where('ratings.business_id', business_id)
                                ])
        console.log('ratings list '+ ratings);
        return ratings;
    }
}

module.exports = RatingService;