var sout = console.log;

var createAtBashSubstitutes = function () {
	var start = 'a'.charCodeAt(0);
	var end = 'z'.charCodeAt(0);
	var substitutes = {' ':' '};
	for (var i = start,j = end;i <=  end,j >= start;i++,j--){
		var key = String.fromCharCode(i);
		var value = String.fromCharCode(j);
		substitutes[key] = value;
	}
	return substitutes;
}

var createDecipherAtBashSubstitute = function (substitutes) {
	var decipherSubstitutes = {};
	var keys = Object.keys(substitutes);
	keys.forEach(function (key) {
		decipherSubstitutes[substitutes[key]] = key;
	});
	return decipherSubstitutes;
}
var atBash = {};
atBash.substitutes = createAtBashSubstitutes();

atBash.encipher = function (plainText) {
	return (plainText.split('').map(function (char) {
		return atBash.substitutes[char];
	})).join('');
}

atBash.decipher = function (cipherText) {
	return encipher(cipherText, createDecipherAtBashSubstitute(atBash.substitutes));
}

module.exports = atBash;
