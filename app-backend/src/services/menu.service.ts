export {};
const BaseService = require('./base.service');

class MenuService extends BaseService{
    constructor(event: any, db: any){
        super(event, db);
    }
    async add(item: any){
        let result =  await this.db('menu').insert(item)
        let itemId = result[0];
        return itemId;
    }

    async getAll(business_id: number){
        let menuList = await this.db('menu').where('business_id', business_id);
        return menuList;
    }
}

module.exports = MenuService;