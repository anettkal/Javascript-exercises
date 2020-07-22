var movies = [
  {title: "Jurassic Park",
  rating: 4.8,
  hasWatched: true
  },
  {
  title: "Spiderman",
  rating: 3.5,
  hasWatched: false
  },
  {
  title: "Arrival",
  rating: 4.3,
  hasWatched: true
  },
  {
  title: "Frozen",
  rating: 4.5,
  hasWatched: false
  }
]

// for (var i = 0; i < movies.length; i++) {
//   if (movies[i].hasWatched === true) {
//     console.log("You have watched " + "\"" + movies[i].title + "\"" +
//     " - " + movies[i].rating + " stars");
//   } else {
//     console.log("You have not seen " + "\"" + movies[i].title + "\"" +
//     " - " + movies[i].rating + " stars");
//   }
// }

function buildString(movie) {
    var result = "you have ";
    if(movie.hasWatched) {
      result += "watched ";
    } else {
      result += "not seen ";
    }
    result += "\"" + movie.title + "\"" - ";
    result += movie.rating + " stars";
    return result;

movies.forEach(function(movie) {
  console.log(buildString(movie));
});
