// Exercício 7: Retorne todos os filmes com ratings entre
// 100 e 105 , exibindo apenas os campos title e ratings.

// use class;
db.movies.find(
  { ratings: 
    {$elemMatch: { $gt: 100, $lt: 105 } }
  },
  { _id: false,
    title: true,
    ratings: true,
  }
);
