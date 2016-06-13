var substitute = {};
var createAtoZSubstitutesAsNumbers = function () {
	var start = 'a'.charCodeAt(0);
	var end = 'z'.charCodeAt(0);
	var substitutes = {' ':' '};
	for (var i = start,j = end;i <=  end,j >= start;i++,j--){
		var key = String.fromCharCode(i);
		var value = i - start;
		substitutes[key] = value;
	}
	return substitutes;
}

substitute.atoz = createAtoZSubstitutesAsNumbers();

module.exports = substitute;
