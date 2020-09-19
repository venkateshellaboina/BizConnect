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
    async addMenuCategory(category: any){
        let result =  await this.db('item_categories').insert(category)
        let categoryId = result[0];
        return categoryId;
    }

    async getAll(business_id: number){
        let menuList = await this.db('menu').where('business_id', business_id);
        return menuList;
    }

    async getMenuCategories(business_id: number){
        let menuCategoryList = await this.db.select('*').from('item_categories').where('business_id', business_id);
        return menuCategoryList;
    }

}

module.exports = MenuService;