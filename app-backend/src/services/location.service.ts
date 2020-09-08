class LocationService{
    protected event: any;
    protected db: any;
    constructor(event: any, db: any){
        this.event = event;
        this.db = db;
    }
    async getLocation(id: number){
        console.log('location id : ' + id);
        return new Promise( (resolve, reject) => {
            this.db('location_details')
                .where('location_id', id)
                .then(result => {
                    console.log('result ' + result);
                    if(!result){
                        reject('No Locations found');
                    }
                    else{
                        let location:any = result[0];
                        resolve(location);
                    }
                })
        })
     
    }
}

module.exports = LocationService;