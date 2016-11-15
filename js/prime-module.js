(function(exports) {
  exports.isPrime = function(num) {
    for (var i = 3; i< num; i++){
      if ((num % i) === 0) {
        return false
      }
    }
    return num > 1;
  };
})(typeof window === 'undefined' || window === null ? global.number = {} : this.number = {});

console.log(number.isPrime(23));
