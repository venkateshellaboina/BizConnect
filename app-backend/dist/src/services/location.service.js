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
class LocationService {
    constructor(event, db) {
        this.event = event;
        this.db = db;
    }
    getLocation(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('location id : ' + id);
            return new Promise((resolve, reject) => {
                this.db('location_details')
                    .where('location_id', id)
                    .then(result => {
                    console.log('result ' + result);
                    if (!result) {
                        reject('No Locations found');
                    }
                    else {
                        let location = result[0];
                        resolve(location);
                    }
                });
            });
        });
    }
    addLocation(location) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.db('location_details')
                    .insert(location)
                    .then(result => {
                    if (!result) {
                        reject('Error fetching location');
                    }
                    console.log('location result ' + result);
                    // let location_id = 1;
                    resolve(result[0]);
                });
            });
        });
    }
}
module.exports = LocationService;
