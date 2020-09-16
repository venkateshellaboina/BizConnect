export {};
const BaseService = require('./base.service');

class ServicesService extends BaseService{
    constructor(event: any, db: any){
        super(event, db);
    };
    async addService(service: any){
        let result = await this.db('services').insert(service);
        let service_id = result[0];
        return service_id;
    }
    async updateService(service: any){
        let service_id = service.service_id;
        delete service.service_id;
        let result = await this.db('services').update(service).where('service_id', service_id);
        return service_id;
    }
    async getAllServices(business_id: number){
        let servicesList = await this.db('services').where('business_id', business_id);
        return servicesList;
    }
};

module.exports = ServicesService;