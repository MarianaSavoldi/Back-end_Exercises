// Exercício 10 : Utilizando o operador $currentDate , crie um campo chamado
// lastUpdated com o tipo timestamp no filme Home Alone .

// use class;
db.movies.updateOne(
  { title: "Home Alone" },
  { $currentDate:
    { lastUpdated: { $type: "timestamp" } }
  }
);