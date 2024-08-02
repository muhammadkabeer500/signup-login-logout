import {auth, createUserWithEmailAndPassword,}from'./firebase.js'



const form = document.querySelector("#signup-form");

form.addEventListener("submit", async (event) => {
  try {
      event.preventDefault();
  
      const email = event.target.children[0].value;
      const password = event.target.children[1].value;
  
      let result = await createUserWithEmailAndPassword (auth,email,password);
      window.location.href="./dashboard.html"
  console.log(result);
  
  } catch (error) {
    console.log("my error msg ", error.message);
  }





    // console.log("email", email);
    // console.log("password", password);
});
    