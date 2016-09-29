var persistence = require('../lib/persistence');
var stringgenerator = require('../lib/stringgenerator');
var urlchecker = require('../lib/urlchecker');

module.exports = function(req, res, next){
    var originalUrl = req.params.original_url;
    if (!urlchecker.isUrl(originalUrl)) {
        return res.json({error: "Invalid URL: "+originalUrl});
    }
    var shortUrl = stringgenerator.generateShortUrl(5);
    var callback = function(err, data) {
        if (err) {console.error(err); return;};
        if (data.length > 0) {
            shortUrl = data[0].short_url;
        } else {
           persistence.save(shortUrl, originalUrl); 
        }
        return res.json({short_url: process.env.DOMAIN + shortUrl});
    };
    persistence.findShortURL(originalUrl, callback);
};

