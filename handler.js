const axios = require("axios");

const apiKey = "YOUR_API KEY GOES HERE";

// We make sure the proper CORS headers are sent here
// More info: https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-cors.html
const headers = {
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Origin": "*", // You can put your site's URL here or use the wildcard *
    "Access-Control-Allow-Methods": "OPTIONS,GET", // Add methods if needed
};

exports.search = async (event, context) => {
  if (event.httpMethod === "GET") {
    return findBusinesses(event);
  }
};

// Get by URL
const findBusinesses = async (event) => {
  const query = event.queryStringParameters;
  let term = query && query.term;
  let location = query && query.location;
  if (!term || !location) {
    return {
      statusCode: 400,
      headers: headers,
      body: "You need to provide a term and location for search!",
    };
  }

  try {
    let result = await axios.get(`https://api.yelp.com/v3/businesses/search`, {
      params: { term: term, location: location },
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    if (!result.data) {
      return {
        statusCode: 404,
        headers: headers,
        body: "Nothing found",
      };
    } else {
      return {
        statusCode: 200,
        headers: headers,
        body: JSON.stringify(result.data),
      };
    }
  } catch (err) {
    return {
      statusCode: 500,
      headers: headers,
      body: JSON.stringify(err),
    };
  }
};
