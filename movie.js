'use strict'

var keys = require('./env.js');
var request = require('request');
var apiUrl = ( `https://www.googleapis.com/customsearch/v1?key=${keys.apiKey}&cx=${keys.id}&q=` );

function get(movieTitle) {
	request (apiUrl+movieTitle+"site%3Aimdb.com", function(err, response, body) {
		console.log(JSON.parse(body).items[0].snippet);
	}); 
}

module.exports = get;

