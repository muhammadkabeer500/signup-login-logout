import{auth,signOut,onAuthStateChanged }from"./firebase.js";

const userEmailDiv = document.querySelector("#user-email");


onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("onAuthStateChanged user:",user);

        userEmailDiv.innerHTML = user.email;
     
      const uid = user.uid;
      // ...
    } else {
        window.location = "./login.html";
      console.log("User is signed out");
    }
  });
  




// const myTestFun =async()=>{
//     await onAuthStateChanged (auth);
// }





const btn = document.querySelector("#logout-btn");

btn.addEventListener('click',async()=>{
    try {
        
   await signOut(auth);
   console.log("signout successfull");
    } catch (error) {
        console.log("btn.addeventlister result:",error);
    }
   
});
