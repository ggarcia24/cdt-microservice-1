"use strict";

const AWS = require("aws-sdk");

const snsClient = new AWS.SNS({
  apiVersion: "2010-03-31",
});

module.exports.dummySNSPublish = async (event) => {
  const response = await snsClient
    .publish({
      Message: JSON.stringify(event.body),
      MessageGroupId: "group1",
      TopicArn: process.env.TOPIC_ARN,
    })
    .promise();

  console.log(response);
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
