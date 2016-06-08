var sout = console.log;
var start = "a".charCodeAt(0);
var end = "z".charCodeAt(0);

var createAtBashSubstitutes = function () {
	var substitutues = {};
	for (i = start,j = end;i <=  end,j >= start;i++,j--){
		var key = String.fromCharCode(i);
		var value = String.fromCharCode(j);
		substitutues[key] = value;
	}
	substitutues[" "] = " ";
	return substitutues;
}

var encipher = function (plainText, substitutues) {
	return (plainText.split("").map(function (char) {
		return substitutues[char];
	})).join("");
}

sout(encipher("attack at dawn", createAtBashSubstitutes()));
