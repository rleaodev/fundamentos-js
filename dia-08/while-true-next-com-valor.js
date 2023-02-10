function* aoInfinitoEAlem() {
  let i = 1;
  while(true) {
    console.log(i);
    const podeIssoInterrogacao = yield i++;
    if(podeIssoInterrogacao === 'reboot') {
      i = 1;
    }
  }
}

const gen = aoInfinitoEAlem();

console.log(gen);
console.log(typeof gen);
console.log(Object.getOwnPropertyNames(gen.__proto__.__proto__));
gen.next();
gen.next();
console.log('ESPERO QUE EU APAREÇA EM ALGUM MOMENTO :/')
gen.next();
// gen.return('acabou');
gen.next('reboot');
gen.next();

console.log('ESPERO QUE EU APAREÇA EM ALGUM MOMENTO :/')