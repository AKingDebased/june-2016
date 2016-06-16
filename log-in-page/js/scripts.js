var logInButton = document.querySelector(".log-in");
var usernameEl = document.querySelector(".username");
var passwordEl = document.querySelector(".password");
var userInfo = {
  username:"bryan44",
  password:"swordfish"
};

logInButton.onclick = function(){
  if(usernameEl.value === userInfo.username){
    if(passwordEl.value === userInfo.password){
      console.log("welcome to our site!");
    }
  }

  usernameEl.value = "";
  passwordEl.value = "";
};
