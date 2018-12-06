
const { goDucks } = require('./go-ducks');
goDucks.appendMessages([() => 'IT\'S']);
goDucks.appendMessages([() => 'A']);
goDucks.appendMessages([() => 'SECRET']);
goDucks.appendMessages([() => 'TO']);
console.log(goDucks.quack());
