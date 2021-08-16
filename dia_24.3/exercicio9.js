// Exercício 9: Retorne os filmes da categoria adventure e com ratings
// maior do que 103, exibindo apenas os campos title, ratings e category.

// use class;
db.movies.find(
  {
    category: { 
      $all: ["adventure"]
    },
    ratings: { $elemMatch: {$gt: 103 } }
  },
  { _id: false,
    title: true,
    ratings: true,
    category: true,
  }
);
