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
Object.defineProperty(exports, "__esModule", { value: true });
const BaseService = require('./base.service');
class LocationService extends BaseService {
    constructor(event, db) {
        super(event, db);
    }
    getLocation(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('location id : ' + id);
            let location = yield this.db('location_details')
                .where('location_id', id)
                .then(result => {
                console.log('result ' + result);
                let location = result[0];
                return location;
            });
            return location;
        });
    }
    addLocation(location) {
        return __awaiter(this, void 0, void 0, function* () {
            let location_id = yield this.db('location_details')
                .insert(location)
                .then(result => result[0]);
            return location_id;
        });
    }
}
module.exports = LocationService;
