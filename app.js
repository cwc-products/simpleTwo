
const { goDucks } = require('./go-ducks');
goDucks.appendMessages([() => 'IT\'S']);
goDucks.appendMessages([() => 'SECRET']);
goDucks.appendMessages([() => 'A']);
console.log(goDucks.quack());
