var express = require('express'),
app = express();

app.use(express.static(__dirname + '/public'));

app.get('/new/:original_url(*)', require('./routes/persistence'));
app.get('/:short_url', require('./routes/reroute'));

app.listen(process.env.PORT || 3000, function(){
  console.log('App is now listening');
});
module.exports = app;
