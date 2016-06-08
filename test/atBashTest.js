var assert = require('chai').assert;
var atBash = require('../src/atBash');

describe('atBash',function() {
	it('encipher',function(){
    var expected = "zggzxp zg wzdm";
    assert.equal(expected, atBash.encipher("attack at dawn"));
	});
	it('encipher',function(){
    var expected = "rg rh z yvzfgrufo dliow";
    assert.equal(expected, atBash.encipher("it is a beautiful world"));
	});
	it('decipher',function(){
    var expected = "it is a beautiful world";
    assert.equal(expected, atBash.encipher("rg rh z yvzfgrufo dliow"));
	});
	it('decipher',function(){
    var expected = "attack at dawn";
    assert.equal(expected, atBash.encipher("zggzxp zg wzdm"));
	});
});
