// xxxxxxxxxx Working For Sign Up Form xxxxxxxxxx
// xxxxxxxxxx Full Name Validation xxxxxxxxxx

function checkUserFullName(){
    var userSurname = document.getElementById("userFullName").value;
    var flag = false;
    if(userSurname === ""){
        flag = true;
    }
    if(flag){
        document.getElementById("userFullNameError").style.display = "block";
    }else{
        document.getElementById("userFullNameError").style.display = "none";
    }
}
// xxxxxxxxxx User Surname Validation xxxxxxxxxx
function checkUserSurname(){
    var userSurname = document.getElementById("userSurname").value;
    var flag = false;
    if(userSurname === ""){
        flag = true;
    }
    if(flag){
        document.getElementById("userSurnameError").style.display = "block";
    }else{
        document.getElementById("userSurnameError").style.display = "none";
    }
}
// xxxxxxxxxx User Field of Study Validation xxxxxxxxxx
function checkUserField(){
    var userFieldOfStudy = document.getElementById("userFieldOfStudy").value;
    var flag = false;
    if(userFieldOfStudy === ""){
        flag = true;
    }
    if(flag){
        document.getElementById("userFieldOfStudyError").style.display = "block";
    }else{
        document.getElementById("userFieldOfStudyError").style.display = "none";
    }
}
// xxxxxxxxxx User Years of Study Validation xxxxxxxxxx
function checkUserYears(){
    var userYearsOfRe = document.getElementById("userYearsOfRe").value;
    var flag = false;
    if(userYearsOfRe === ""){
        flag = true;
    }
    if(flag){
        document.getElementById("userYearsOfReError").style.display = "block";
    }else{
        document.getElementById("userYearsOfReError").style.display = "none";
    }
}
// xxxxxxxxxx User Years of Study Validation xxxxxxxxxx
function checkUserAffiliation(){
    var userAffiliation = document.getElementById("userAffiliation").value;
    var flag = false;
    if(userAffiliation === ""){
        flag = true;
    }
    if(flag){
        document.getElementById("userAffiliationError").style.display = "block";
    }else{
        document.getElementById("userAffiliationError").style.display = "none";
    }
}
// xxxxxxxxxx Email Validation xxxxxxxxxx
function checkUserEmail(){
    var userEmail = document.getElementById("userEmail");
    var userEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var flag;
    if(userEmail.value.match(userEmailFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("userEmailError").style.display = "block";
    }else{
        document.getElementById("userEmailError").style.display = "none";
    }
}
// xxxxxxxxxx Password Validation xxxxxxxxxx
function checkUserPassword(){
    var userPassword = document.getElementById("userPassword");
    var userPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;
    var flag;
    if(userPassword.value.match(userPasswordFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("userPasswordError").style.display = "block";
    }else{
        document.getElementById("userPasswordError").style.display = "none";
    }
}
// xxxxxxxxxx Check user bio characters. It'll use later xxxxxxxxxx
function checkUserBio(){
    var userBio = document.getElementById("userBio").value;
    var flag = false;
    if(flag){
        document.getElementById("userBioError").style.display = "block";
    }else{
        document.getElementById("userBioError").style.display = "none";
    }
}
// xxxxxxxxxx Submitting and Creating new user in firebase authentication xxxxxxxxxx
function signUp(){
    var userFullName = document.getElementById("userFullName").value;
    var userSurname = document.getElementById("userSurname").value;
    var userFieldOfStudy = document.getElementById("userFieldOfStudy").value;
    var userYearsOfRe = document.getElementById("userYearsOfRe").value;
    var userAffiliation = document.getElementById("userAffiliation").value;
    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("userPassword").value;
    var userFullNameFormate = /^([A-Za-z.\s_-])/;
    var userEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var userPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;
    var userFieldOfStudyFormate = /^([A-Za-z.\s_-])/;
    var userYearsOfReFormate = /^([A-Za-z.\s_-])/;
    var userAffiliationFormate = /^([A-Za-z.\s_-])/;

    var checkUserFullNameValid = userFullName.match(userFullNameFormate);
    var checkUserEmailValid = userEmail.match(userEmailFormate);
    var checkUserPasswordValid = userPassword.match(userPasswordFormate);
    var checkUserFieldOfStudyValid = userFieldOfStudy.match(userFieldOfStudyFormate);
    var checkUserYearsOfReValid = userYearsOfRe.match(userYearsOfReFormate);
    var checkUserAffiliationValid = userAffiliation.match(userAffiliationFormate);

    if(checkUserFullNameValid == null){
        return checkUserFullName();
    }else if(userSurname === ""){
        return checkUserSurname();
    }else if(checkUserEmailValid == null){
        return checkUserEmail();
    }else if(checkUserPasswordValid == null){
        return checkUserPassword();
    }else if(checkUserFieldOfStudyValid == null){
        return checkUserFieldOfStudy();
    }else if(checkUserYearsOfReValid == null){
        return checkUserYears();
    }else if(checkUserAffiliationValid == null){
        return checkUserAffiliation();
    }else{
        firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).then((success) => {
            var user = firebase.auth().currentUser;
            var uid;
            if (user != null) {
                uid = user.uid;
            }
            var firebaseRefName = firebase.database().ref('user');
            var userData = {
                userFullName: userFullName,
                userSurname: userSurname,
            }
            var firebaseRefBack = firebase.database().ref('user/background');
            var userBackground = {
              userFieldOfStudy: userFieldOfStudy,
              userYearsOfRe: userYearsOfRe,
              userAffiliation: userAffiliation,
            }
            var firebaseRefLogin = firebase.database().ref('user/login');
            var userLogin = {
              userEmail: userEmail,
              userPassword: userPassword,
              userFb: "https://www.facebook.com/",
              userTw: "https://twitter.com/",
              userGp: "https://plus.google.com/",
              userBio: "User biography",
            }

            firebaseRefName.child(uid).set(userData);
            firebaseRefBack.child(uid).set(userBackground);
            firebaseRefLogin.child(uid).set(userLogin);

            swal('Your Account Created','Your account was created successfully, you can log in now.',
            ).then((value) => {
                setTimeout(function(){
                    window.location.replace("./index.html");
                }, 1000)
            });
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            swal({
                type: 'error',
                title: 'Email Already Exists in DataBase',
                text: "Try Signing In with Password",
            })
        });
    }
}
// xxxxxxxxxx Working For Sign In Form xxxxxxxxxx
// xxxxxxxxxx Sign In Email Validation xxxxxxxxxx
function checkUserSIEmail(){
    var userSIEmail = document.getElementById("userSIEmail");
    var userSIEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var flag;
    if(userSIEmail.value.match(userSIEmailFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("userSIEmailError").style.display = "block";
    }else{
        document.getElementById("userSIEmailError").style.display = "none";
    }
}
// xxxxxxxxxx Sign In Password Validation xxxxxxxxxx
function checkUserSIPassword(){
    var userSIPassword = document.getElementById("userSIPassword");
    var userSIPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;
    var flag;
    if(userSIPassword.value.match(userSIPasswordFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("userSIPasswordError").style.display = "block";
    }else{
        document.getElementById("userSIPasswordError").style.display = "none";
    }
}
// xxxxxxxxxx Check email or password exsist in firebase authentication xxxxxxxxxx
function signIn(){
    var userSIEmail = document.getElementById("userSIEmail").value;
    var userSIPassword = document.getElementById("userSIPassword").value;
    var userSIEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var userSIPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;

    var checkUserEmailValid = userSIEmail.match(userSIEmailFormate);
    var checkUserPasswordValid = userSIPassword.match(userSIPasswordFormate);

    if(checkUserEmailValid == null){
        return checkUserSIEmail();
    }else if(checkUserPasswordValid == null){
        return checkUserSIPassword();
    }else{
        firebase.auth().signInWithEmailAndPassword(userSIEmail, userSIPassword).then((success) => {
            swal({
                type: 'successfull',
                title: 'Succesfully signed in',
            }).then((value) => {
                setTimeout(function(){
                    window.location.replace("./feed2.html");
                }, 1000)
            });
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            swal({
                type: 'error',
                title: 'Error',
                text: "Error",
            })
        });
    }
}
// xxxxxxxxxx Working For Profile Page xxxxxxxxxx
// xxxxxxxxxx Get data from server and show in the page xxxxxxxxxx
firebase.auth().onAuthStateChanged((user)=>{
    if (user) {
    //   User is signed in.
        let user = firebase.auth().currentUser;
        let uid
        if(user != null){
            uid = user.uid;
        }
        let firebaseRefKey = firebase.database().ref().child(uid);
        firebaseRefKey.on('value', (dataSnapShot)=>{
            document.getElementById("userFullName").innerHTML = dataSnapShot.val().userFullName;
            document.getElementById("userSurname").innerHTML = dataSnapShot.val().userSurname;
            // userEmail = dataSnapShot.val().userEmail;
            // userPassword = dataSnapShot.val().userPassword;
            document.getElementById("userFieldOfStudy").innerHTML = dataSnapShot.val().userFieldOfStudy;
            document.getElementById("userYearsOfRe").innerHTML = dataSnapShot.val().userYearsOfRe;
            document.getElementById("userAffiliation").innerHTML = dataSnapShot.val().userAffiliation;
            document.getElementById("userFb").innerHTML = dataSnapShot.val().userFb;
            document.getElementById("userTw").innerHTML = dataSnapShot.val().userTw;
            document.getElementById("userGp").innerHTML = dataSnapShot.val().userGp;
            document.getElementById("userBio").innerHTML = dataSnapShot.val().userBio;
        })
    } else {
    //   No user is signed in.
    }
});
// xxxxxxxxxx Show edit profile form with detail xxxxxxxxxx
function showEditProfileForm(){
    document.getElementById("profileSection").style.display = "none"
    document.getElementById("editProfileForm").style.display = "block"
    var userFullName = document.getElementById("userFullName").innerHTML;
    var userSurname = document.getElementById("userSurname").innerHTML;
    var userFieldOfStudy = document.getElementById("userFieldOfStudy").innerHTML;
    var userYearsOfRe = document.getElementById("userYearsOfRe").innerHTML;
    var userAffiliation = document.getElementById("userAffiliation").innerHTML;
    var userFb = document.getElementById("userFb").getAttribute("href");
    var userTw = document.getElementById("userTw").getAttribute("href");
    var userGp = document.getElementById("userGp").getAttribute("href");
    var userBio = document.getElementById("userBio").innerHTML;
    document.getElementById("userFullName").value = userFullName;
    document.getElementById("userSurname").value = userSurname;
    document.getElementById("userFieldOfStudy").value = userFieldOfStudy;
    document.getElementById("userYearsOfRe").value = userYearsOfRe;
    document.getElementById("userAffiliation").value = userAffiliation;
    document.getElementById("userFacebook").value = userFb;
    document.getElementById("userTwitter").value = userTw;
    document.getElementById("userGooglePlus").value = userGp;
    document.getElementById("userBio").value = userBio;
}
// xxxxxxxxxx Hide edit profile form xxxxxxxxxx
function hideEditProfileForm(){
    document.getElementById("profileSection").style.display = "block";
    document.getElementById("editProfileForm").style.display = "none";
}
// xxxxxxxxxx Save profile and update database xxxxxxxxxx
function saveProfile(){
    let userFullName = document.getElementById("userFullName").value
    let userSurname = document.getElementById("userSurname").value
    let userFieldOfStudy = document.getElementById("userFieldOfStudy").value
    let userYearsOfRe = document.getElementById("userYearsOfRe").value
    let userAffiliation = document.getElementById("userAffiliation").value
    let userFacebook = document.getElementById("userFacebook").value
    let userTwitter = document.getElementById("userTwitter").value
    let userGooglePlus = document.getElementById("userGooglePlus").value
    let userBio = document.getElementById("userBio").value
    var userFullNameFormate = /^([A-Za-z.\s_-])/;
    var checkUserFullNameValid = userFullName.match(userFullNameFormate);
    if(checkUserFullNameValid == null){
        return checkUserFullName();
    }else if(userSurname === ""){
        return checkUserSurname();
    }else{
        let user = firebase.auth().currentUser;
        let uid;
        if(user != null){
            uid = user.uid;
        }
        var firestoreRef = firebase.database().ref();
        var userData = {
            userFullName: userFullName,
            userSurname: userSurname,
            userFieldOfStudy: userFieldOfStudy,
            userYearsOfRe: userYearsOfRe,
            userAffiliation: userAffiliation,
            userFb: userFacebook,
            userTw: userTwitter,
            userGp: userGooglePlus,
            userBio: userBio,
        }
        firestoreRef.child(uid).set(userData);
        swal({
            type: 'successfull',
            title: 'Update successfull',
            text: 'Profile updated.',
        }).then((value) => {
            setTimeout(function(){
                document.getElementById("profileSection").style.display = "block";

                document.getElementById("editProfileForm").style.display = "none";
            }, 1000)
        });
    }
}
// xxxxxxxxxx Working For Sign Out xxxxxxxxxx
function signOut(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        swal({
            type: 'successfull',
            title: 'Signed Out',
        }).then((value) => {
            setTimeout(function(){
                window.location.replace("index.html");
            }, 1000)
        });
    }).catch(function(error) {
        // An error happened.
        let errorMessage = error.message;
        swal({
            type: 'error',
            title: 'Error',
            text: "Error",
        })
    });
}
