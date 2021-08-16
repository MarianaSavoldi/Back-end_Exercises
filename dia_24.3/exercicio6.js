// Exercício 6: Retorne todos os filmes com ratings maior
// do que 103, exibindo apenas os campos title e ratings.

// use class;
db.movies.find(
  { ratings: 
    {$elemMatch: { $gt: 103 } }
  },
  { _id: false,
    title: true,
    ratings: true,
  }
);
