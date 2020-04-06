let AWS = require('aws-sdk');
const s3 = new AWS.S3();
const sns = new AWS.SNS();

exports.handler = async (event) => {
    try {
        let data = await sns.publish({
            Message: "12",
            TopicArn: "arn:aws:sns:us-east-1:318300609668:udith-test",
            MessageStructure: "String",
            MessageAttributes: {}
        }).promise();
console.log("sucsess")
console.log(data)

    } catch (err) {
        console.log("errrrrrrrrr")
console.log(err)
        // error handling goes here
    };
   

    return { "message": "Successfully executed" };
};