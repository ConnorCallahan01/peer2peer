
import firebase from "firebase/app";
import "firebase/database";

var firstButton = document.getElementbyId("firstButton");
var abstract = document.getElementbyId("abstract");

function submitClick() {
  window.alert("Still working");
  var database = firebase.database();

  var firebaseRef = firebase.database().ref();
  firebaseRef.child("Text").set("someValue");

}
var project = document.getElementbyId("project");

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}
