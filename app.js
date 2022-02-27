var express = require('express');
var api = require('./sortAPI');
var app = express();
const port=process.env.PORT || 4000
//enable body parse
app.configure(function(){
	app.use(express.bodyParser());
});

//routes
app.post('/sortDeck',api.sortDeck);

//start server
app.listen(port);
console.log('app is lisening on port '+port+'....');
