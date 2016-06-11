var getIP = require('ipware')().get_ip;
var UAParser = require('ua-parser-js');

module.exports = function(req, res, next){
    var userInfo = {};
    userInfo.ipaddress = getUserIp(req);
    userInfo.language = getUserLanguage(req);
    userInfo.software = getUserSoftware(req);
    return res.json(userInfo);
};

function getUserIp(req){
    return getIP(req).clientIp;
}

function getUserLanguage(req) {
    return req.headers["accept-language"];
}

function getUserSoftware(req) {
    var ua = new UAParser().setUA(req.headers['user-agent']);
    return ua.getOS().name + " "+ ua.getOS().version;
}