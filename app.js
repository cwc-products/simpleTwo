const { goDucks } = require('./go-ducks');
goDucks.appendMessages([() => 'A']);
goDucks.appendMessages([() => 'TO']);
console.log(goDucks.quack());

