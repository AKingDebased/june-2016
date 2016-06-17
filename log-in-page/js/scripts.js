var logInButton = document.querySelector(".log-in");
var usernameEl = document.querySelector(".username");
var passwordEl = document.querySelector(".password");

//default operator - whoa
/*get info from our 'server' - if there's nothing,
just use an empty object*/
var users = JSON.parse(localStorage.getItem("users")) || {};

//the long version of the 'users' variable
// if(localStorage.getItem("users") === null){
//   users = {test:"i'm here!"}
// } else {
//   users = localStorage.getItem("users");
// }

//indexed
logInButton.onclick = function(){
  if(users[usernameEl.value] !== undefined){
    //username exists
    if(passwordEl.value === users[usernameEl.value]){
      //do the passwords match?
      alert("welcome back " + usernameEl.value);
    } else {
      alert("incorrect password!");
    }
  } else {
    //username does not exist
    /*setting a value to a non-existent property
    creates that property dynamically*/
    users[usernameEl.value] = passwordEl.value;

    //save their information to the 'server'
    //you cannot save objects to localStorage, only strings
    localStorage.setItem("users",JSON.stringify(users));
  }
};
