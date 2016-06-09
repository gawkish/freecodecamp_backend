var supertest = require('supertest'),
    assert = require('assert'),
    app = require('../../app');

exports.is_route_working = function(done){
  supertest(app)
  .get('/')
  .expect(200)
  .end(done);
};

exports.not_time = function(done){
  supertest(app)
  .get('/time')
  .expect(200)
  .end(function(err, response){
    assert.ok(!err);
    assert.ok(response.body.unix == null);
    assert.ok(response.body.natural == null);  
    return done();
  });
};

exports.unix_time_accept = function(done){
  supertest(app)
  .get('/1451606400')
  .expect(200)
  .end(function(err, response){
    assert.ok(!err);
    assert.ok(response.body.unix == 1451606400);
    assert.ok(response.body.natural == 'January 1, 2016');  
    return done();
  });
};

exports.natural_date_accept = function(done){
  supertest(app)
  .get('/January 1, 2016')
  .expect(200)
  .end(function(err, response){
    assert.ok(!err);
    assert.ok(response.body.unix == 1451606400);
    assert.ok(response.body.natural == 'January 1, 2016');  
    return done();
  });
};

exports.test_from_youtube = function(done){
  supertest(app)
  .get('/December 15, 2015')
  .expect(200)
  .end(function(err, response){
    assert.ok(!err);
    assert.ok(response.body.unix == 1450137600);
    assert.ok(response.body.natural == 'December 15, 2015');  
    return done();
  });
};

