var sout = console.log;

rot13 = {};
var start = 'a'.charCodeAt(0);
var end = 'z'.charCodeAt(0);

rot13.createSubstitute = function(){
  var substitutes = {' ':' '};
  for(var i = start; i <= end; i++){
    var key = String.fromCharCode(i);
    var value = i + 13;
    var overFlow = end - value;

    if(overFlow <= -1){
      value = String.fromCharCode(start - overFlow - 1);
    } else {
      value = String.fromCharCode(value);
    }
    substitutes[key] = value;
    }
    return substitutes;
  }

module.exports = rot13;
