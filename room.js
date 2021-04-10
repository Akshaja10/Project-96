// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCRGB4E-hckwD6jRWffljtRE5qVfW8IcUI",
    authDomain: "project-94-ab4da.firebaseapp.com",
    databaseURL: "https://project-94-ab4da-default-rtdb.firebaseio.com",
    projectId: "project-94-ab4da",
    storageBucket: "project-94-ab4da.appspot.com",
    messagingSenderId: "948622347434",
    appId: "1:948622347434:web:06705d3702e74138ca54d3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
console.log("Room Name - " + Room_names);
row = "<div class= 'room_name' id="+ Room_names + "onclick= 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name)
window.location = "index.html";
}
 function logout()
 {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
 }


 function addUser()
{
user_name = document.getElementById ("user_name").value;
localStorage.setItem ("user_name", user_name);
window.location = "kwitter_page.html";
}


function addRoom() {
    room_name = document.getElementById ("room_name").value;
    
    firebase.database().ref("/").child(room_name).update({});
    
    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
    }