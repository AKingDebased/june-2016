var movieTitles = ["heat","frozen","the avengers","the lord of the rings","star wars","harry potter","avatar","alien","scream","citizen kane","it's a wonderful life","22 jump street","the neighbors","the hangover","warcraft"];
var correctMovie, listActors;

var removeRandomItem = function(items){
  var randomIndex = Math.floor(Math.random() * items.length);

  return items.splice(randomIndex,1);
}

var getMovieData = function(){
  return $.ajax({
    url:"http://www.omdbapi.com/?t=" + removeRandomItem(movieTitles),
    method:"GET"
  });
}

var displayActorNames = function(actorNames){
  var $actorsEl = $(".actors");
  var namesArray = actorNames.split(", ");

  $actorsEl.html("");

  listActors = setInterval(function(){
    if(namesArray.length <= 0){
        alert('you lose this round!');
        clearInterval(listActors);
        setUpRound();
    }

    var randomActor = removeRandomItem(namesArray);

    $actorsEl.append("<h3>" + randomActor + "</h3>");
  },2000);
}

var setUpRound = function(){
  getMovieData().success(function(movieData){
    displayActorNames(movieData.Actors);
    correctMovie = movieData.Title;
  });
}

$(".start").on("click",function(){
  $(".game-area").html("");

  $("<input>").attr("placeholder","guess a movie title...").addClass("form-control movie-guess").appendTo($(".game-area"));

  $("<div>").addClass("actors").appendTo($(".game-area"));

  setUpRound();
})

$(document).on("keydown",".movie-guess",function(event){
  if(event.which === 13){
    if($(this).val().toLowerCase() === correctMovie.toLowerCase()){
      alert("correct!")
      clearInterval(listActors);

      setUpRound();
    }
  }
});
