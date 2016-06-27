//ajax request
/*ask a server for data, and hopefully receive that data
this operation is performed asynchronously - i.e.,
all code after the request will keep running
while the request is occurring*/

//api
/* application programming interface */



setInterval(function(){
  var randomPost = Math.floor(Math.random() * 100) + 1;

  $.ajax({
    //where are we going?
    url:"http://jsonplaceholder.typicode.com/posts/" + randomPost,
    //what do we do when we get there?
    method:"GET",
    //what do we do when the data comes back?
    success:function(serverData){
      $("body").append("<h1>" + serverData.title + "</h1>");
      $("body").append("<p>" + serverData.body + "</p>");
    }
  })
},2000)
