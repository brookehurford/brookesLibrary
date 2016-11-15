(function(exports){
  exports.isEven = function(x) {
    if (x === 0)
      return true;
    else if (x === 1)
      return false;
    else
      return exports.isEven(x - 2);
  }
})(typeof window === 'undefined' || window === null ? global.num = {} : this.num = {});

console.log(num.isEven(15));
console.log(num.isEven(362));
