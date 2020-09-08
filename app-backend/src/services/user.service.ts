class UserService{
    protected event: any;
    protected db:any;
    constructor(event: any, db:any){
        this.event = event;
        this.db = db;
    }
    async getUserInfo(user_email:any){
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
}
module.exports = UserService;