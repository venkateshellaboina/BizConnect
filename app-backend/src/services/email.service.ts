export {};
const BaseService = require('./base.service');
var AWS = require('aws-sdk');

AWS.config.update({
    region: 'ap-south-1'
});

var params: any = {
    Destination: { /* required */
      ToAddresses: []
    },
    Message: { /* required */
      Body: { /* required */
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
    Source: 'venkysmart1997@gmail.com', /* required */
    ReplyToAddresses: [
       'venkysmart1997@gmail.com'
    ],
  };


class EmailService extends BaseService{
   
    async sendEmail(){
        console.log('send email');
        params.Destination.ToAddresses = ["mr.robott.2051@gmail.com"];
        var sesService = await new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();
        // let response = await sesService;
        console.log('send email response ' + JSON.stringify(sesService));
        sesService
        .then(data => console.log('email data ' + data.MessageId))
        .catch(error => console.log('email error' + JSON.stringify(error)))
    }
   
}

module.exports = EmailService;