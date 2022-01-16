
//YOUR FIREBASE LINKS
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
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").ariaValueMax;
      firebase.database().ref(room_name).push({
            name:user_name,
            massage:msg,
            like:0
      });

      document.getElementById("msg").value = "";
      
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);
       Aname = message_data[ 'name'];
       message = message_data['message'];
       like = message_data['like'];
       name_with_tag = "<h4>" + Aname + "<img class= 'user_tick' src='tick.png'></h4>";
       message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
  like_button = "< button class='btn btn-warning' id="+firebase_message_id+"value="+like+" onclick='updatelike(this.id)'>";
        span_with_tag = "<span class='glyphicon glypicon-thumps-up'>Like: "+ like +"</span></button><hr>";
         
        
        row = name_with_tag + message_with_tag + like_button + span_with_tag;
        document.getElementById("output").innerHTML += row;
        
//End code
      } });  }); }
getData();
