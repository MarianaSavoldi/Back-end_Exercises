// { Exercício 4: Retorne o total de super-heróis com até 1.80m. }

// use class;
db.superheroes.find({ "aspects.height": { $lte: 180 } }).count();