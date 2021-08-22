# Simple API request routing with AWS Lambda and API Gateway

When an api does not support CORS, you cannot make calls to it directly from the browser. Your browser will try to make a pre-flight OPTIONS request before calling the API and this will fail if the API does not support CORS. This is a simple example backend app that routes your requests through AWS API Gateway and a Lambda function. The API Gateway's API has CORS enabled.

This example app routes request to the YELP's business search API (https://api.yelp.com/v3/businesses/search).

## What do you need?

- AWS account
- AWS CLI installed and configured
- Serverless Framework for setting up the resources

## How to use this?

- Set up an AWS account at https://aws.amazon.com/
- Install AWS CLI and configure it https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html
- Install Serverless globally (npm install serverless -g)
- Clone this git repo
- Register an account for Yelp API and get an api key. Update the ApiKey-variable in handlers.js. (https://www.yelp.com/developers/)
- Install with "npm i"
- Deploy the API and Lambda function with "sls deploy"

Now the resources are deployed on your AWS account and you can view them in the console. Your endpoint is ready to be used.