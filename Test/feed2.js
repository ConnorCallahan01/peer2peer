$(document).ready(function () {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAd7fKr96e5ZEdVn5181Czw-FElJRXUouc",
        authDomain: "fraud-team-news-feed.firebaseapp.com",
        databaseURL: "https://fraud-team-news-feed.firebaseio.com",
        projectId: "fraud-team-news-feed",
        storageBucket: "fraud-team-news-feed.appspot.com",
        messagingSenderId: "393350782314"
    };


    firebase.initializeApp(config);

    var database = firebase.database();

    database.ref().on("child_added", function (snapshot) {
        var sv = snapshot.val();
        console.log(snapshot.val());
        var key = snapshot.key;
        var newEntry = '<div class="row1"><div class="specialist-name">' + sv.Name + '</div><img src="https://connectme.apple.com/servlet/JiveServlet/previewBody/1508898-102-1-10580249/cross.png" class="delete-icon" id="' + key + '"></div><div class="row2"><div class="message-text">' + sv.Message + '</div></div><div class="row3"><div class="date">' + sv.Date + '</div></div>';
        newDiv = document.createElement('div');
        $(newDiv).addClass("comment").html(newEntry).prependTo($(".news-feed"));

    });

    $("#submit").on("click", function () {
        event.preventDefault();

        var comment = $(".comment");

        var nameEntry = $("#name").val().trim();
        var messageEntry = $("#message").val().trim();

        var d = new Date();
        var year = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var dd = d.getDate();
        var mm = d.getMonth();
        var month = year[mm];
        var yyyy = d.getFullYear();
        var today = month + " " + dd + ", " + yyyy;

        database.ref().push({
            Name: nameEntry,
            Date: today,
            Message: messageEntry,
        });

        $("#name").val("");
        $("#message").val("");

        $(".delete-icon").on("click", function () {
            console.log("clicked");
            var id = $(this).attr('id');
            console.log(id);
            var key = id;
            firebase.database().ref().child(key).remove();
            window.location.reload();
        });

    });

});
