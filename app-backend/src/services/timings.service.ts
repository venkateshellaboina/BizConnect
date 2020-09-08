class TimingsService{
    protected event: any;
    protected db: any;
    constructor(event: any, db: any){
        this.event = event;
        this.db = db;
    }
    async get(business_id: number){
        return new Promise( (resolve, reject) => {
            this.db('timings')
                .where('business_id', business_id)
                .then(result => {
                    console.log('result ' + result);
                    if(!result){
                        reject('No Timings found');
                    }
                    else{
                        let timings:any = result;
                        resolve(timings);
                    }
                })
        })
     
    }
}

module.exports = TimingsService;