export {};
const BaseService = require('./base.service');

class MenuService extends BaseService{
    constructor(event: any, db: any){
        super(event, db);
    }
    async add(item: any){
        let itemId =  await this.db('menu')
                        .insert(item)
                        .then( result => result[0]);
        return itemId;
    }

    async getAll(business_id: number){
        let menuList = await this.db('menu')
                            .where('business_id', business_id)
                            .then(result => {
                                console.log(' All items', result);
                                return(result);
                            });
        return menuList;
    }
}

module.exports = MenuService;