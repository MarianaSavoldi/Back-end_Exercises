// Exercício 1: Utilizando o operador $all , retorne todos os filmes que
// contenham action e adventure no array category.

// use class;
db.movies.find(
  { category: 
    { $all: ["action", "adventure"] }
  }
);
