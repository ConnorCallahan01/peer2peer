
var firstButton = document.getElementbyId("firstButton");
var abstract = document.getElementbyId("abstract");

function writeUserData() {
  window.alert("Still is");
  var firebaseRef = firebase.database().ref();

  firebaseRef.child("Text").set("someValue");
}
