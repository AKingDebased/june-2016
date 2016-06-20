var playlist = [
  {
    title:"mad sounds",
    artist:"arctic monkeys",
    album:"am"
  },{
  title:"r u mine",
  artist:"arctic monkeys",
  album:"am"
},{
  title:"red right hand",
  artist:"arctic monkeys",
  album:"humbug"
},{
  title:"this year",
  artist:"mountain goats",
  album:"the sunset tree"
},
{
  title:"around the world",
  artist:'draft punk',
  album:'discovery'
}];
var numOfTDs = 3;
var playlistTable = document.querySelector(".playlist-body");

// <tr>
//   <td>r u mine</td>
//   <td>arctic monkeys</td>
//   <td>am</td>
// </tr>

//for loop over each object in the playlist array
for(var i = 0; i < playlist.length; i++){
  var tableRow = document.createElement("tr");

  //for - in loop
  //create TDs for each property inside
  //each individual song object
  for(var property in playlist[i]){
    var tableData = document.createElement("td");
    tableData.textContent = playlist[i][property];
    tableRow.appendChild(tableData);
  }

  playlistTable.appendChild(tableRow);
}
