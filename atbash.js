var sout = console.log;
var start = "a".charCodeAt(0);
var end = "z".charCodeAt(0);
var substitutues = {};
for (i = start,j = end;i <=  end,j >= start;i++,j--){
	var key = String.fromCharCode(i);
	var value = String.fromCharCode(j);
	substitutues[key] = value;
}

sout(substitutues);