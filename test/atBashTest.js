var assert = require('chai').assert;
var atBash = require('../src/atBash');

describe('atBash',function() {
	it('encipher',function(){
    var expected = "zggzxp zg wzdm";
    assert.equal(expected, atBash.encipher("attack at dawn"));
	});
});
