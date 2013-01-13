var express = require('express');
var api = require('./shuffleAPI');
var app = express();

app.configure(function(){
	app.use(express.bodyParser());
});

app.get('/shuffle', api.shuffle);
app.post('/customDeck', api.customDeck);

app.listen(4000);
console.log('app is lisening on port 4000....');
