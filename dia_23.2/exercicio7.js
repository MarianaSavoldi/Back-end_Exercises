// { Exercício 7: Selecione todos os super-heróis que têm olhos verdes. }

//use class;
db.superheroes.find({ "aspects.eyeColor": { $eq: "green" } });