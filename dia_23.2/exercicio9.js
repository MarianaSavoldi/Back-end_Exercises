// { Exercício 9: Utilizando o operador $in , selecione todos os 
// super-heróis com cabelos pretos ou carecas ( "No Hair" ). }

//use class;
db.superheroes.find({ "aspects.hairColor": { $in: [ "Black", "No Hair" ] } });