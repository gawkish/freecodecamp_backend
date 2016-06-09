module.exports = function(time){
    var result = {};
    result.unix = getUnixValue(time);
    result.natural = getNaturalValue(time);
    return result;
};

function getUnixValue(time) {
    var unixTime = parseInt(time);
    if (isNaN(unixTime)){
        //string
        if (!isNaN(Date.parse(time))){
            return Date.parse(time + " GMT+0000")/1000; //setting GMT to not use local
        } else {
            return null;
        }
    } else if (unixTime >= 0) {
        //number
        return new Date(unixTime * 1000).getTime()/1000;
    } else {
        return null;
    }
}

function getNaturalValue(time) {
    var unixTime = parseInt(time);
    if (isNaN(unixTime)){
        //string
        var date = new Date(time);
        if (!isNaN(date.getTime())) {
            var options = {year: 'numeric', month: 'long', day: 'numeric' };
            return date.toLocaleDateString('en-US', options);
        } else {
            return null;
        }
    } else if (unixTime >= 0) {
        //number
        var date =  new Date(unixTime * 1000);
        var options = {year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    } else {
        return null;
    }
}