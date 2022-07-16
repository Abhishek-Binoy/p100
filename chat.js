// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyA5K4rljX47tDR3BExkwgC0t0Bw90IVycc",
    authDomain: "chat-app-4d81b.firebaseapp.com",
    projectId: "chat-app-4d81b",
    storageBucket: "chat-app-4d81b.appspot.com",
    messagingSenderId: "993962685990",
    appId: "1:993962685990:web:2ebf426ba9c8555dc618e7"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



