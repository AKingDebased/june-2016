//the individual items of this array are NOT jQuery objects
var $inputElements = $("input,textarea").not(".submit");
var $submitButton = $(".submit");
var isValidForm = function($formElements){
  for(var i = 0; i < $formElements.length; i++){
    //if any form element is blank, return false
    if($($formElements[i]).val() === "") return false;
  }

  return true;
}

$(".wrapper").popover({
  placement:"left",
  trigger:"hover",
  content:"please complete all forms"
})

$inputElements.on("keyup",function(){
  if(isValidForm($inputElements)){
    $submitButton.removeAttr("disabled");
    $(".wrapper").popover("destroy");
  } else {
    $submitButton.attr("disabled",true);
    $(".wrapper").popover({
      placement:"left",
      trigger:"hover",
      content:"please complete all forms"
    })
  }
})
