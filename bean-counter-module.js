(function(exports) {
  exports.countChar = function(letter) {
    var totalLetters = 0;
    return function(string){
      for ( i=0; i<string.length; i++) {
        if (string.charAt(i) === letter) {
          totalLetters++;
        }
      }
      return totalLetters;
    }
  };
})(typeof window === 'undefined' || window === null ? global.letter = {} : this.letter = {} );

var countLetters = letter.countChar("b");
console.log(countLetters("brookebailey"));
