(function(exports) {
  exports.range = function(x, y, z) {
    var myArray = [];

    if (z > 0) {
      for (var i = x; i <= y; i+= z) {
        myArray.push(i)
      }
    } else {
      for (var i = x; i >= y; i += z) {
        myArray.push(i)
      }
    }
    return myArray;
  }
})(typeof window === 'undefined' || window === null ? global.numList = {} : this.numList = {} );

console.log(numList.range(1, 22, 4));
