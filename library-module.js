var library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true,
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true,
  },
  {
    author: 'Suzanne Collins',
    title:  'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false,
  }];

(function(exports){
    exports.read = function(books){
      for (var i = 0; i < books.length; i++) {
        if (books[i].readingStatus == true) {
          console.log("I have read " + books[i].title)
        } else if (books[i].readingStatus == false) {
          console.log ("I have not read " + books[i].title)
        } else {
          return
        }
      }
    }

})(typeof window === 'undefined' || window === null ? global.books = {} : this.books = {});

books.read(library);
