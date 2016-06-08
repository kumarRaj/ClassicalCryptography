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

var encipher = function (plainText, substitutues) {
	return (plainText.split('').map(function (char) {
		return substitutues[char];
	})).join('');
}

var decipher = function (cipherText, substitutues) {
	return encipher(cipherText, createDecipherAtBashSubstitute(substitutues));
}

sout(encipher('attack at dawn', createAtBashSubstitutes()));
sout(decipher('zggzxp zg wzdm', createAtBashSubstitutes()));