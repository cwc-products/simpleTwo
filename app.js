
const { goDucks } = require('./go-ducks');
goDucks.appendMessages([() => 'IT\'S']);
goDucks.appendMessages([() => 'A']);
goDucks.appendMessages([() => 'SECRET']);
console.log(goDucks.quack());
