export {};
class BaseService{
    protected event;
    protected db;
    constructor(event: any, db: any){
        this.event = event;
        this.db = db;
    }
}

module.exports = BaseService;