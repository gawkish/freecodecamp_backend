var express = require('express'),
app = express();

app.use(express.static(__dirname + '/public'));

app.get('/:time', require('./routes/time'));

app.listen(3000, function(){
  console.log('App is now listening');
});
module.exports = app;