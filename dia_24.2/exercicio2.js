// Exercício 2: Utilizando o modificador $each , adicione as categorias
// "villain" e "comic-based" ao filme Batman.

// use class;
db.movies.updateOne(
  { title: "Batman" },
  { $push: {
    category: {
      $each:
      [
        "villain",
        "comic-based",
      ]
    },
  } },
);
