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


$passwordInputs.popover({
  placement:"left",
  trigger:"focus",
  content:'<div class="strength"><div class="weak current"></div><div class="ok"></div><div class="strong"></div></div><p></p>',
  html:true
});

var passwordsMatch = false;


$passwordInputs.on("focus",function(){
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

  if(passwordsMatch){
    $(".popover-content p").text("passwords match!");
  } else {
    $(".popover-content p").text("passwords must match");
  }

  if(passwordStrength($(this).val()) === 0){
    if($(".ok").hasClass("current")){
      $(".ok").removeClass("current");
    }

    if($(".strong").hasClass("current")){
      $(".strong").removeClass("current");
    }

    $(".weak").addClass("current");
  }

  if(passwordStrength($(this).val()) === 1){
    if($(".strong").hasClass("current")){
      $(".strong").removeClass("current");
    }

    $(".ok").addClass("current");
  }

  if(passwordStrength($(this).val()) === 2){
    if(!$(".ok").hasClass("current")){
      $(".ok").addClass("current");
    }

    $(".strong").addClass("current");
  }
})

$passwordInputs.on("keyup",function(){
  if($(".password").val().trim() !== $(".verify").val().trim()){
    $(".popover-content p").text("passwords must match");
    passwordsMatch = false;
  } else {
    $(".popover-content p").text("passwords match!");
    passwordsMatch = true;
  }

  if($(this).val().trim().length < 5){
    passwordStrength = 0;
    if($(".ok").hasClass("current")){
      $(".ok").removeClass("current");
    }

    if($(".strong").hasClass("current")){
      $(".strong").removeClass("current");
    }

    $(".weak").addClass("current");
  }

  if($(this).val().trim().length >= 5){
    passwordStrength = 1;
    if($(".strong").hasClass("current")){
      $(".strong").removeClass("current");
    }

    $(".ok").addClass("current");
  }

  if($(this).val().trim().length >= 10){
    passwordStrength = 2;
    $(".strong").addClass("current");
  }
});
