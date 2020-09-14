const AWS = require('aws-sdk');

class S3Service {
    protected s3: any;
    constructor(){
        this.s3 = new AWS.S3({
            region: process.env.S3_HOSTED_REGION,
            accessKeyId: process.env.ACCESS_KEY_ID,
            secretAccessKey: process.env.SECRET_ACCESS_KEY
        });
    }

    getSignedUrl(operation: string, bucket: string, key: string, expiry: number){
        return this.s3.getSignedUrl(operation, {
            Bucket: bucket,
            Key: key,
            Expires : expiry
        });
    }
}

module.exports = S3Service;