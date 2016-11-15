(function(exports){
  exports.min = function(a,b) {
    if (a < b) {
      return a;
    } else if (b < a) {
      return b;
    } else {
      return false;
    }
  }
})(typeof window === 'undefined' || window === null ? global.numbers = {} : this.numbers = {});

console.log(numbers.min(4,6));
console.log(numbers.min(7,2));
console.log(numbers.min(5,5));
