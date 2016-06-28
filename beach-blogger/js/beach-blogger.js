//ajax request
/*ask a server for data, and hopefully receive that data
this operation is performed asynchronously - i.e.,
all code after the request will keep running
while the request is occurring*/

//api
/* application programming interface */


var $searchBox = $("input");
var $postsEl = $(".posts");
var retrievedUser;

var renderPosts = function(userPosts){
  $postsEl.html("");

  for(var i = 0; i < userPosts.length; i++){
    var $post = $("<div>");
    $post.append($("<h3>").text(userPosts[i].title));
    $post.append($("<p>").text(userPosts[i].body));

    $postsEl.append($post);
  }
}

var getUserPosts = function(username){
  /* promise - an object with special
  methods that help us handle successful
  and failed asynchronous behavior
  (usually HTTP requests) */
  $.ajax({
    url:"http://jsonplaceholder.typicode.com/users/?username=" + username,
    method:"GET",
  }).success(function(userInfo){
    $(".user-info").html("see <a href='#'>" + userInfo[0].username + "'s</a> profile");
    retrievedUser = userInfo[0];

    $.ajax({
      url:"http://jsonplaceholder.typicode.com/posts?userId=" + userInfo[0].id,
      method:"GET"
    }).success(renderPosts);
  });
};

var populateModal = function(userData){
  $(".modal-title").text(userData.username);
  $(".modal-body").html($(".user-profile-template").html());
  $(".email").text(userData.email);
  $(".phone-num").text(userData.phone);
  $(".comp-name").text(userData.company.name);
  $(".comp-slogan").text(userData.company.catchPhrase);
}

$("input, button").on("click keydown",function(event){
  if($(event.currentTarget).is("input")){
    //if we hit the enter key
    if(event.which === 13){
      getUserPosts($searchBox.val());
      $searchBox.val("");
    }
  } else if($(event.currentTarget).is("button")){
    if(event.which === 1){
      getUserPosts($searchBox.val());
      $searchBox.val("");
    }
  } else {
    console.log("that's not right");
  }
});

$(document).on("click","a",function(){
  populateModal(retrievedUser);
  $(".user-profile").modal("show");
})
