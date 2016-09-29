var persistence = require('../lib/persistence');

module.exports = function(req, res, next){
    var callback = function(err, data) {
        if (err) {console.error(err); return;};
        if (data.length > 0) {
            res.redirect(data[0].original_url)
        } else {
           return res.json({error: "Invalid short URL"});
        }
    }
    persistence.findOriginalURL(req.params.short_url, callback);
}