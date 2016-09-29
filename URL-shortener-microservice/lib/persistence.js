var mongoose = require('mongoose');

var url = process.env.MONGOLAB_URI;
mongoose.connect(url);

// Create a schema
var ShortURLSchema = new mongoose.Schema({
  short_url: String,
  original_url: String 
});
// Create a model based on the schema
var ShortURL = mongoose.model('url', ShortURLSchema);


module.exports = {
    findAll: ShortURL.find(function (err, urls) {
        if (err) {console.error(err); return;};
        console.log(urls)
    }),
    
    findOriginalURL: function(shortUrl, data) {
        ShortURL.find({short_url: shortUrl}, data);
    },
    
    findShortURL: function(originalUrl, data) {
        ShortURL.find({original_url: originalUrl}, data);
    },
    
    save: function(shortUrl, originalUrl) {
        ShortURL.create(new ShortURL({short_url: shortUrl, original_url: originalUrl}), function(err, url){
            if (err) {console.error(err); return;}
            else console.log(url    );
        })
    }
}





