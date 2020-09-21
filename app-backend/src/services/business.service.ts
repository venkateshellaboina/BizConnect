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
    async getBusinessByEmail(user_email: string){
        let result =  await this.db('business_details').where('user_email', user_email);
        let business = result[0];
        return business;
    }
    async getAll(category: string, searchKey: string){
        let strQuery = "SELECT * FROM business_details ";
        if(category){
            strQuery += ` WHERE category = '${category}' `;
            if(searchKey){
                searchKey = searchKey.toLowerCase();
                strQuery += ` AND ( name LIKE '%${searchKey}%' OR description LIKE '%${searchKey}%' )`;
            }
        }
        else{
            if(searchKey){
                searchKey = searchKey.toLowerCase();
                strQuery += ` WHERE ( name LIKE '%${searchKey}%' OR description LIKE '%${searchKey}%' )`;
            }
        }
        
        console.log('query : ' + strQuery);
        let result = await this.db.raw(strQuery);
        let businessList = result[0];
        return businessList;
       
    }
    async addBusinessDetails(business: any, LocationService: any, TimingsService: any){

        let location = business.location;
        delete business.location;
        let timings = business.timings;
        delete business.timings;
        let gallery = business.gallery;
        delete business.gallery;
       
        let result = await this.db('business_details').insert(business);
        let business_id = result[0];

        let services: any  = [];
        if(location){
            location.business_id = business_id;
            let locationService : any = LocationService.addLocation(location);
            services.push(locationService);
        }
        if(timings && timings.length> 0){
            timings = timings.map( timing => {
                        timing.business_id = business_id;
                        return timing;
                    });
            let timingsService = TimingsService.addTimings(timings);
            services.push(timingsService);
        }
        if(gallery && gallery.length> 0){
            gallery = gallery.map(galleryItem => {
                        galleryItem.business_id = business_id;
                        return galleryItem;
                    });
            let galleryService = this.addBusinessGallery(gallery);
            services.push(galleryService);
        }
        let servicesResult = await Promise.all(services);
        return business_id;
    }
    async updateBusinessDetails(business: any, LocationService: any, TimingsService: any){
        let location = business.location;
        delete business.location;
        let timings = business.timings;
        delete business.timings;
        let gallery = business.gallery;
        delete business.gallery;

        let business_id = business.business_id;
        delete business.business_id;
        delete business.user_email;
       
        let result = await this.db('business_details').update(business).where('business_id', business_id);

        let services: any  = [];
        if(location){
            let locationService : any = LocationService.updateLocation(location);
            services.push(locationService);
        }
        if(timings && timings.length> 0){
            let timingsService = TimingsService.updateTimings(timings);
            services.push(timingsService);
        }
        if(gallery && gallery.length> 0){
            let galleryService = this.updateBusinessGallery(gallery);
            services.push(galleryService);
        }
        let servicesResult = await Promise.all(services);
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
    async updateBusinessGallery(gallery: number){
        let result = await this.db('business_images').insert(gallery);
        return result[0];
    }

    async getBusinessCategories(){
        let result = await this.db.select('name').from('business_categories');
        let business_categories = result.map(category => category.name);
        console.log('business_categories ' + JSON.stringify(business_categories));
        return business_categories;
    }
    
}

module.exports = BusinessService;