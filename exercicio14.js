// { Exercício 14: Selecione todos os super-heróis com 1.80m ou
// 2.00m de altura e que sejam publicados pela Marvel Comics. }

// use class;
db.superheroes.find({
  $and: [
    {
      $or: [
        { "aspects.height": { $eq: 180 } },
        { "aspects.height": { $eq: 200 } }
      ]
    },
    { publisher: { $eq: "Marvel Comics" } }
  ]
});
