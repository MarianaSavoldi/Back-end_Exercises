// Exercício 13 : Para os filmes Batman ou Home Alone , atribua a imdbRating o valor 17,
// caso o valor de imdbRating seja menor que 17.

// use class;
db.movies.updateMany(
  { $or:
    [
      { title: { $eq: "Batman" } },
      { title: { $eq: "Home Alone" } },
    ]
  },
  { $max: { imdbRating: 17 } }
);
