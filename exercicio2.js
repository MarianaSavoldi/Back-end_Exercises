//use class;
db.superheroes.find({ "aspects.height": { $lt: 180 } });