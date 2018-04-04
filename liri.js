require("dotenv").config();

var keys = require('./keys.js');
var fs = require('fs')
var Twitter = require('twitter');
var request = require('request');
var imdb = require('imdb-api');
var client = new Twitter(keys.twitter);
var params = {
	screen_name: "VokeVideos", count: 20
}
var command = process.argv[2];
var action = process.argv[3];

switch (command) {
	case "my-tweets":
		result = myTweets();
		break;
	case "spotify-this-song":
		result = spotifySong();
		break;
	case "movie-this":
		result = movieThis();
		break;
	case "do-what-it-says":
		result = whatItSays();
		break;
}

function myTweets() {
	client.get('statuses/user_timeline', params, function (error, tweets, response) {
		if (!error && response.statusCode == 200) {
			console.log(('=============== LOG ENTRY BEGIN ===============\r\n'));
			for (var index = 0; index < tweets.length; index++) {
				var number = index + 1
				console.log((number + '. Tweet: ' + tweets[index].text + '\r\nCreated at: ' + tweets[index].created_at + ' \r\n'));
			}
			console.log(('=============== LOG ENTRY END ===============\r\n \r\n'))
		} else { console.log(error) };
	}
	)
};


function movieThis() {
	request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy", function(error, response, body) {
		
		// If the request is successful (i.e. if the response status code is 200)
		if (!error && response.statusCode === 200) {
			imdb.get(action);
			imdb.search({
				title: action
			})

			console.log();
		}
	});
	
	
}






function spotifySong() {
	request('https://api.spotify.com/v1/search?q=' + title + '&type=track', function (error, response, body) {
			// If the request is successful (i.e. if the response status code is 200)
		if (!error && response.statusCode === 200) {

		}
	});

};