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
var AWS = require('aws-sdk');
AWS.config.update({
    region: 'ap-south-1'
});
var params = {
    Destination: {
        ToAddresses: []
    },
    Message: {
        Body: {
            Html: {
                Charset: "UTF-8",
                Data: "<h1>Business updated. Please check</h1>"
            },
            Text: {
                Charset: "UTF-8",
                Data: "Business updated. Please check"
            }
        },
        Subject: {
            Charset: 'UTF-8',
            Data: 'Test email'
        }
    },
    Source: 'venkysmart1997@gmail.com',
    ReplyToAddresses: [
        'venkysmart1997@gmail.com'
    ],
};
class EmailService extends BaseService {
    sendEmail() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('send email');
            params.Destination.ToAddresses = ["mr.robott.2051@gmail.com"];
            var sesService = yield new AWS.SES({ apiVersion: '2010-12-01' }).sendEmail(params).promise();
            // let response = await sesService;
            console.log('send email response ' + JSON.stringify(sesService));
            sesService
                .then(data => console.log('email data ' + data.MessageId))
                .catch(error => console.log('email error' + JSON.stringify(error)));
        });
    }
}
module.exports = EmailService;
