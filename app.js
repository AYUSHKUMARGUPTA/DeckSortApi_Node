var express = require('express');
var api = require('./shuffleAPI');
var app = express();

//enable body parse
app.configure(function(){
	app.use(express.bodyParser());
});

//routes
app.get('/shuffle', api.shuffle);
app.post('/customDeck', api.customDeck);

//start server
app.listen(4000);
console.log('app is lisening on port 4000....');
