var express = require('express');
var multer  = require('multer');

app = express();

app.use(express.static(__dirname + '/public'));

var upload = multer();
 
app.post('/get_file_size', upload.single('file'), function (req, res, next) {
    res.json({size: req.file.size});
})

app.listen(process.env.PORT || 3000, function(){
  console.log('App is now listening');
});

module.exports = app;
