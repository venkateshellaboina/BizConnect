const AWS = require('aws-sdk');

class S3Service {
    protected s3: any;
    constructor(){
        this.s3 = new AWS.S3({
            region: process.env.region,
            accessKeyId: process.env.accessKeyId,
            secretAccessKey: process.env.secretAccessKey
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