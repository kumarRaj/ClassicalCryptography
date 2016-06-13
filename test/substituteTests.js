var assert = require('chai').assert;
var substitute = require('../src/substitute');

describe('substitute',function() {
	it('shouldSubstituteNumbersForCharacters',function(){
    var expected = 0;
    assert.equal(expected, substitute.atoz["a"]);
	});
	it('zis26',function(){
    var expected = 25;
    assert.equal(expected, substitute.atoz["z"]);
	});
	it('ris17',function(){
    var expected = 17;
    assert.equal(expected, substitute.atoz["r"]);
	});

});
