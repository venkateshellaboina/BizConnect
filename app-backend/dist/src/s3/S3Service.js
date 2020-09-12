"use strict";
const AWS = require('aws-sdk');
class S3Service {
    constructor() {
        this.s3 = new AWS.S3({
            region: process.env.region,
            accessKeyId: process.env.accessKeyId,
            secretAccessKey: process.env.secretAccessKey
        });
    }
    getSignedUrl(operation, bucket, key, expiry) {
        return this.s3.getSignedUrl(operation, {
            Bucket: bucket,
            Key: key,
            Expires: expiry
        });
    }
}
module.exports = S3Service;
