var assert = require('chai').assert;
var rot13 = require('../src/rot13');


describe('rot13',function() {
	it('substitute',function(){
    var expected = 'r';
    assert.equal(expected, rot13.createSubstitute()['e']);
	});
	
	it('substitute',function(){
    var expected = 'n';
    assert.equal(expected, rot13.createSubstitute()['a']);
	});
});
