// Exercício 1: Adicione a categoria "superhero" ao filme Batman.

// use class;
db.movies.findOne(
  { title: "Batman" },
  { $push: {
    category: "superhero"
  } },
);
