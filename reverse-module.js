(function(exports){
  exports.reverseArray = function(array){
    var output = [];
    for (var i = array.length - 1; i >= 0; i--)
      output.push(array[i]);
    return output;
  }
})(typeof window === 'undefined' || window === null ? global.array = {} : this.array = {});

console.log(array.reverseArray("funstuff"));
