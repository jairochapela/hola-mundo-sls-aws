'use strict';

module.exports.hello = async event => {
  if (event.queryStringParameters && event.queryStringParameters.name) {
    const name = event.queryStringParameters.name
    return {
      statusCode: 200,
      body: "Hola, " + name
    }
  } else {
    return {
      statusCode: 404,
      body: "Not found"
    }
  }
};
