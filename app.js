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
app.listen(process.env.PORT, process.env.IP);
console.log('app is lisening on port '+process.env.PORT+'....');
