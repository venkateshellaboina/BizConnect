class UserService{
    protected event: any;
    protected db:any;
    constructor(event: any, db:any){
        this.event = event;
        this.db = db;
    }
    async getUser(user_email:any){
        return new Promise((resolve, reject) => {
            this.db('user')
                .where('user_email', user_email)
                .then(users => {
                    console.log('users ' + users);
                    const user = users[0];
                    if (!user) {
                        reject('User not found');
                    }
                    resolve(user);
                })
        });
    }
    async addUser(user: any){
        return new Promise( (resolve, reject) => {
            let email = user.user_email;
            if(!email){
                reject("User email missing");
            }
            else{
                this.db('user')
                    .insert(user)
                    .then(result => {
                        if(!result)
                            reject('Error creating current user');
                        console.log('result : ' + result);
                        resolve(user.user_email);
                    })
            }
        })
    }

    async updateUser(user: any){
        return new Promise( (resolve, reject) => {
            let user_email = user.user_email;
            delete user.user_email;
            this.db('user')
                .update(user)
                .where('user_email', user_email)
                .then(result => {
                    if(!result)
                        reject('Error updating current user');
                        
                    resolve(user_email);
                })
        })
    }
}
module.exports = UserService;