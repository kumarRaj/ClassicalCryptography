var sout = console.log;
var start = 'a'.charCodeAt(0);
var end = 'z'.charCodeAt(0);

var createAtBashSubstitutes = function () {
	var substitutues = {' ':' '};
	for (i = start,j = end;i <=  end,j >= start;i++,j--){
		var key = String.fromCharCode(i);
		var value = String.fromCharCode(j);
		substitutues[key] = value;
	}
	return substitutues;
}

var createDecipherAtBashSubstitute = function (substitutues) {
	var decipherSubstitutes = {};
	var keys = Object.keys(substitutues);
	keys.forEach(function (key) {
		decipherSubstitutes[substitutues[key]] = key;
	});
	return decipherSubstitutes;
}
var atBash = {};
atBash.substitutues = createAtBashSubstitutes();

atBash.encipher = function (plainText) {
	return (plainText.split('').map(function (char) {
		return atBash.substitutues[char];
	})).join('');
}

atBash.decipher = function (cipherText) {
	return encipher(cipherText, createDecipherAtBashSubstitute(atBash.substitutues));
}

module.exports = atBash;
