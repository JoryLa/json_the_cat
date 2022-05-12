const request = require('request');
const breedName = process.argv[2];
request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  //console.log(`body:`, body);                 // ==> logs body as string
  //console.log(`typeof body: `, typeof(body)); // ==> type = string
  const data = JSON.parse(body);                // ==> turns body into object
  //console.log(`data:`, data);                   // ==> logs body as object
  //console.log(`typeof data: `, typeof(data)); // ==> type = object
  console.log(`Description:`, data[0].description); // ==> prints description
  error = `Not found`;
  console.log(`Error: `, error);

});