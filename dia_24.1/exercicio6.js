// Exercício 6 : Multiplique por 4 o imdbRating do filme Batman .

//use class;
db.movies.updateOne(
  { title: "Batman" },
  { $mul: {
    imdbRating: 4 
  }}
);
