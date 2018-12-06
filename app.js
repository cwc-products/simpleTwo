
const { goDucks } = require('./go-ducks');
goDucks.appendMessages([() => 'SECRET']);
goDucks.appendMessages([() => 'A']);
console.log(goDucks.quack());
