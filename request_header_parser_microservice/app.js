var express = require('express'),
app = express();

app.get('/api/whoami', require('./routes/whoami'));

app.listen(process.env.PORT || 3000, function(){
  console.log('App is now listening');
});
module.exports = app;
