const request = require('request');
const args = process.argv.slice(2);
const fs = require('fs');

request(args[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(args[1], body, (err) => {
    if (err) throw err;
    console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}`);
  });
});

/* 
    - Use the request library to make the HTTP request
    - Use Node's fs (filesync?) module to write the file
    - Use the callback based approach we've been learning so far 
    - Do not use the pipe function
    - Do not use synchronous functions

*/