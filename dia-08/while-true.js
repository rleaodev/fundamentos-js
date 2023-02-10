function* aoInfinitoEAlem() {
  let i = 1;

  while (true) {
    console.log(i);
    yield i++;
  }
}
const gen = aoInfinitoEAlem();
console.log('MOSTRAAAAAAAAA [1]');
console.log(gen);
console.log(Object.getOwnPropertyNames(gen.__proto__.__proto__));
console.log('manual')
gen.next();
gen.next();
gen.next();
gen.next();
gen.next();
gen.next();
console.log('manual')

for (const i of gen) {
  if (i === 10) {
    gen.return();
  }
}

console.log('MOSTRAAAAAAAAA [2]');
