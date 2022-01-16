// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyAkjROEHYk_bJJ2Pr6sy7W5X6vaGFlY47k",
      authDomain: "kwitter-1f76a.firebaseapp.com",
      databaseURL: "https://kwitter-1f76a-default-rtdb.firebaseio.com",
      projectId: "kwitter-1f76a",
      storageBucket: "kwitter-1f76a.appspot.com",
      messagingSenderId: "780771213071",
      appId: "1:780771213071:web:378335940339409a9dc87a",
      measurementId: "G-SK0FKLPZK8"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
        window.location = "index.html";
    }
function updatelike(message_id)
{
      console.log("clicked on button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_likes = Number(likes) + 1;
      console.log(update_likes);

      firebase.database().ref(room_name).child(message_id).update({
         like : update_likes   
      });
}
