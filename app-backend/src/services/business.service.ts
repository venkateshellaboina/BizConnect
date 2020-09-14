export {};
const BaseService = require('./base.service');

class BusinessService extends BaseService{
    constructor(event: any, db: any){
        super(event, db);
    }
    async getBusinessDetails(business_id: number){
        let businessInfo = this.getBusinessInfo(business_id);
        let businessGallery = this.getBusinessGallery(business_id);
        let result = await Promise.all([businessInfo, businessGallery]);
        let business = result[0];
        business.gallery = result[1];
        return business;
    }
    async getAll(category: string, searchKey: string){
        let businessList = await this.db('business_details').where('category', category)
        return businessList;
    }
    async addBusinessDetails(business: any, LocationService: any){
        let location = business.location;
        let location_id = await LocationService.addLocation(location);
        delete business.location;
        business.location_id = location_id;

        let result = await this.db('business_details').insert(business);
        let business_id = result[0];
        return business_id;
    }
    async getBusinessInfo(business_id: number){
        let result =  await this.db('business_details').where('business_id', business_id);
        let business = result[0];
        return business;
    }
    async getBusinessGallery(business_id: number){
        let gallery = await this.db('business_images').where('business_id', business_id);
        return gallery;
    }
    
}

module.exports = BusinessService;