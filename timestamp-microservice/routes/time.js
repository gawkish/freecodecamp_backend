var time = require('../lib/time');

module.exports = function(req, res, next){
  return res.json(time(req.params.time));
};