
const { goDucks } = require('./go-ducks');
goDucks.appendMessages([() => 'A']);
goDucks.appendMessages([() => 'SECRET']);
console.log(goDucks.quack());
