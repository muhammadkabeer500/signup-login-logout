import{auth,onAuthStateChanged }from"./firebase.js";



onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = "./Page/dashboard.html";
     
    } else {
        window.location. href = "./Page/login.html";
      
    }
  });