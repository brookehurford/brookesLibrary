"use strict";

(function(exports) {

  exports.myname = function() {
    console.log("Brooke Hurford")
  };

  exports.currentDate = function() {
    var currentDate = new Date()
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var year = currentDate.getFullYear()
    console.log(month + "/" + day + "/" + year);
  };

  exports.createdFor = function() {
    console.log("Created for JS Foundations at Hack U")
  };

  exports.isPrime = function(num) {
    for (var i = 3; i< num; i++){
      if ((num % i) === 0) {
        return false
      }
    }
    return num > 1;
  };

  exports.countChar = function(string,ch) {
    var totalLetters = 0;
    for (var i = 0; i < string.length; i++)
      if (string.charAt(i) == ch)
        totalLetters += 1;
    return totalLetters;
  };

  exports.isEven = function(x) {
    if (x === 0)
      return true;
    else if (x === 1)
      return false;
    else
      return exports.isEven(x - 2);
  };

  exports.fizz = function(num) {
    for (var i=1; i<= num; i++){
      if (((i % 5) === 0) && ((i % 3)=== 0)) {
        console.log("FizzBuzz")
      } else if ((i % 5) === 0) {
        console.log("Buzz")
      } else if ((i % 3) === 0) {
        console.log("Fizz")
      } else {
        console.log(i)
      }
    }
  };

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
  };

  exports.min = function(a,b) {
    if (a < b) {
      return a;
    } else if (b < a) {
      return b;
    } else {
      return false;
    }
  };

  exports.monthName = function(number) {
    var names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return names[number - 1];
  };

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
  };

  exports.reverseArray = function(array){
    var output = [];
    for (var i = array.length - 1; i >= 0; i--)
      output.push(array[i]);
    return output;
  };

  exports.Vehicle = function(type, id, line, currentLatitude, currentLongitude, currentSpeed, fullTank, behindSchedule, running, location){
    this.type = type;
    this.id = id;
    this.line = line;
    this.currentLatitude = currentLatitude;
    this.currentLongitude = currentLongitude;
    this.currentSpeed = currentSpeed;
    this.fullTank = fullTank;
    this.behindSchedule = behindSchedule;
    this.running = running;
    this.location = location;
  };

  exports.Vehicle.prototype.info = function() {
    console.log(this.type + ", " + this.line + ", " + this.location);
  };

})(typeof window === 'undefined' || window === null ? global.brookesLibrary = {} : this.brookesLibrary = {});

var library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true,
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: false,
  }];


brookesLibrary.myname();
brookesLibrary.currentDate();
brookesLibrary.createdFor();
console.log(brookesLibrary.isPrime(23));
console.log(brookesLibrary.countChar("brookebailey", "b"));
console.log(brookesLibrary.isEven(9));
brookesLibrary.fizz(10);
brookesLibrary.read(library);
console.log(brookesLibrary.min(7,2));
console.log(brookesLibrary.monthName(3));
console.log(brookesLibrary.range(1, 22, 4));
console.log(brookesLibrary.reverseArray("funstuff"));

var line77 = new brookesLibrary.Vehicle("bus", 19, 77, 100, 50, 65, false, true, true, "belmont ave.");
line77.info();
