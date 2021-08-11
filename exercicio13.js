// { Exercício 13: Selecione todos os super-heróis que não
// sejam humanos ou que não sejam maiores do que 1.80m. }

// use class;
db.superheroes.find({ $nor: [
  { race: { $eq: "Human" } },
  { "aspects.height": { $gt: 180 } }
] });