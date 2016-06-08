var sout = console.log;
var start = "a".charCodeAt(0);
var end = "z".charCodeAt(0);
for (i = start,j = end;i <=  end,j >= start;i++,j--){
	sout(String.fromCharCode(i) + " -> " + String.fromCharCode(j));
}