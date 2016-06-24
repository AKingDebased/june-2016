//the individual items of this array are NOT jQuery objects
var $inputElements = $("input,textarea").not(".submit");
var $passwordInputs = $("input[type=password]");
var $submitButton = $(".submit");
var isValidForm = function($formElements){
  for(var i = 0; i < $formElements.length; i++){
    //if any form element is blank, return false
    //trim the input to account for extra white space
    if($($formElements[i]).val().trim() === "") return false;
  }

  return true;
}
var isWhiteSpace = function(str){
  return str.trim() === ""
}
var validForm = false;
var verified = false;

//set up the popover so it works
//the moment the page loads
$(".wrapper").popover({
  placement:"left",
  trigger:"hover",
  content:"please complete all forms"
})

$inputElements.on("keydown",function(event){
  if(validForm){
    if(isWhiteSpace($(this).val())){
      $submitButton.removeAttr("disabled");
    }
  }
})


$inputElements.on("keyup",function(event){
  //trigger every time we hit Backspace
  if(event.keyCode === 8){
    //if the input is now all whitespace
    if(isWhiteSpace($(this).val())){
      //form is no longer valid
      $submitButton.attr("disabled",true);
    }
  }

  if(!verified){
    if(isValidForm($inputElements)){
      /* if the form is valid, we remove
      the 'disabled' attribute and destroy
      the popover */
      $submitButton.removeAttr("disabled");
      $(".wrapper").popover("destroy");
      validForm = true;
    } else {
      /* if the form is not valid, we
      ensure that the submit button is disabled,
      and reinstate the popover */
      $submitButton.attr("disabled",true);
      $(".wrapper").popover({
        placement:"left",
        trigger:"hover",
        content:"please complete all forms"
      })
      validForm = false;
    }

    verified = true;
  }
})

$inputElements.on("focusout",function(){
  verified = false;
});

//password validation
$passwordInputs.popover({
  placement:"left",
  trigger:"focus",
  content:'<div class="strength"><div class="weak current"></div><div class="ok"></div><div class="strong"></div></div><p class=passwords-match></p><p class=special-char></p>',
  html:true
});

var passwordsMatch = false;
var passwordStrength = function(str){
  var strength;

  if(str.trim().length < 5){
    strength = 0;
  }

  if(str.trim().length >= 5){
    strength = 1;
  }

  if(str.length >= 10){
    strength = 2;
  }

  return strength;
}

var hasSpecialChars = function(str){
  //using truthiness & falsiness
  return str.match(/[A-Z]/) !== null && str.match(/[0-9]/) !== null && str.match(/!/) !== null || str.match(/#/) !== null || str.match(/&/) !== null
}

$passwordInputs.on("focus keyup",function(){
  if(passwordsMatch){
    $(".popover-content .passwords-match").text("passwords match!");
  } else {
    $(".popover-content .passwords-match").text("passwords must match");
  }

  if(!hasSpecialChars($(this).val())){
    $(".popover-content .special-char").text("password must have a capital letter, number, and special character");
  } else {
    $(".popover-content .special-char").text("password has all necessary characters");
  }

  if(passwordStrength($(this).val()) === 0){
    if($(".ok").hasClass("current")){
      $(".ok").removeClass("current");
    }

    if($(".strong").hasClass("current")){
      $(".strong").removeClass("current");
    }

    $(".weak").addClass("current");
  } else if(passwordStrength($(this).val()) === 1){
    if($(".strong").hasClass("current")){
      $(".strong").removeClass("current");
    }

    if(!$(".ok").hasClass("current")){
      $(".ok").addClass("current");
    }
  } else if(passwordStrength($(this).val()) === 2){
    if(!$(".ok").hasClass("current")){
      $(".ok").addClass("current");
    }

    $(".strong").addClass("current");
  }
});
