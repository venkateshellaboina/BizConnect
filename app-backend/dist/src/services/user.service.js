"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class UserService {
    constructor(event, db) {
        this.event = event;
        this.db = db;
    }
    getUser(user_email) {
        return __awaiter(this, void 0, void 0, function* () {
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
                });
            });
        });
    }
    addUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                let email = user.user_email;
                if (!email) {
                    reject("User email missing");
                }
                else {
                    this.db('user')
                        .insert(user)
                        .then(result => {
                        if (!result)
                            reject('Error creating current user');
                        console.log('result : ' + result);
                        resolve(user.user_email);
                    });
                }
            });
        });
    }
    updateUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                let user_email = user.user_email;
                delete user.user_email;
                this.db('user')
                    .update(user)
                    .where('user_email', user_email)
                    .then(result => {
                    if (!result)
                        reject('Error updating current user');
                    resolve(user_email);
                });
            });
        });
    }
}
module.exports = UserService;
