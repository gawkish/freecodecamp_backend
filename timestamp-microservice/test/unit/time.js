var chai = require('chai');
var expect = chai.expect;
var time = require('../../lib/time');

describe('time as random string', function() {
  var result = time('time');
  it('unix is null', function() {
    expect(result.unix).to.equal(null);
  });
    
  it('natural is null', function() {
    expect(result.natural).to.equal(null);
  });
    
  it('should return object with two properties', function() {
    expect(Object.getOwnPropertyNames(result).length).to.equal(2);
  });
});

describe('time as unix -1', function() {
  var result = time('-1');
  it('unix is null', function() {
    expect(result.unix).to.equal(null);
  });
    
  it('natural is null', function() {
    expect(result.natural).to.equal(null);
  });
    
  it('should return object with two properties', function() {
    expect(Object.getOwnPropertyNames(result).length).to.equal(2);
  });
});

describe('time as unix 1463616000', function() {
  var result = time('1463616000');
  it('unix', function() {
    expect(result.unix).to.equal(1463616000);
  });
    
  it('natural', function() {
    expect(result.natural).to.equal('May 19, 2016');
  });
    
  it('should return object with two properties', function() {
    expect(Object.getOwnPropertyNames(result).length).to.equal(2);
  });
});

describe('time as natural May 19, 2016', function() {
  var result = time('May 19, 2016');
  it('unix', function() {
    expect(result.unix).to.equal(1463616000);
  });
    
  it('natural', function() {
    expect(result.natural).to.equal('May 19, 2016');
  });
    
  it('should return object with two properties', function() {
    expect(Object.getOwnPropertyNames(result).length).to.equal(2);
  });
});