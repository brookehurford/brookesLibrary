var brookesLibrary = {
  name: function() {
    console.log("Brooke Hurford")
  },
  currentDate: function() {
    var currentDate = new Date()
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var year = currentDate.getFullYear()
    console.log(month + "/" + day + "/" + year);
  },
  createdFor: function() {
    console.log("Created for JS Foundations at Hack U")
  }
};
