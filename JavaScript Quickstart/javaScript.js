//var response = prompt(question)
//alert(response)

/*
function sayGreeting(greeting){
  var response = prompt("What is your name?")
  alert(greeting+", "+response)
}
sayGreeting("Sup")

function add(a, b){
  return a + b
}
console.log( add(20,21))

*/

var movies = [
  {
  title: 'Spiderman',
  status: 'available',
  time: '2pm'
},
{
title: 'Avengers',
status: 'available',
time: '3pm'
},
{
title: 'Batman',
status: 'no',
time: '4pm'
}
]




//console.log(movies[0])
//movies.push('last')
//movies.pop()

//movies.forEach(movie => alert(movie))

/*
for (var movie of movies){
    console.log(movie)
}

var movie = {
  title: 'Wonder Woman',
  time: '2pm'
}
*/
for (var movie of movies){
  if (movie.status === 'available'){
    console.log("The movie "+movie.title + " plays at " + movie.time)
  }
  else{
    console.log("Sorry, the movie "+movie.title+" is sold out")
  }
}
