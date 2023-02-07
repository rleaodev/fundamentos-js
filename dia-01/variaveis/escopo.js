let foo = 'foo';
const bar = 'bar';
var foobar = 'foobar';

console.log({ foo, bar, foobar });

foo = 'foo-alterado';
foobar = 'foobar-alterado';
// bar = 'bar-alterado';

console.log({ foo, bar, foobar });

function xpto() {
  var abc = 'cba';
  console.log(foobar);
}

{
  foo = 'foobar-alterado-em-outro-escopo';
  foobar = 'foobar-alterado-em-outro-escopo';
}

xpto()
console.log({ foo, bar, foobar, abc });