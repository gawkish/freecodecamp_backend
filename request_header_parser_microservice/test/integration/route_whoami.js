var supertest = require('supertest'),
    assert = require('assert'),
    app = require('../../app');

exports.test = function(done){
  supertest(app)
  .get('/api/whoami')
  .set('Accept-Language', 'en-US')
  .set('User-Agent', 'Mozilla/5.0 (Windows NT 6.1; WOW64) Chrome/50.0.2661.102')
  .set('REMOTE_ADDR', '127.0.0.1')
  .set('HTTP_CLIENT_IP', '127.0.0.2')
  .set('HTTP_X_FORWARDED', '127.0.0.2')
  .expect(200)
  .end(function(err, response){
    assert.ok(!err);
    assert.ok(response.body.ipaddress == '127.0.0.2');
    assert.ok(response.body.language == 'en-US');
    assert.ok(response.body.software == 'Windows 7');  
    return done();
  });
};

