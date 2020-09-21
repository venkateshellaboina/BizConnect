"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const S3Service = require('./s3/S3Service');
const uuid = require('uuid');
module.exports.handle = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    let bucket = process.env.S3_BUCKET_NAME;
    let key = event.queryStringParameters['filename'];
    let expiry = 900;
    let s3 = new S3Service();
    let signedUrl = s3.getSignedUrl('putObject', bucket, key, expiry);
    let result = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            url: signedUrl
        })
    };
    callback(null, result);
};
