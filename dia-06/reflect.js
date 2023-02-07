// function criaUmArraySQN () {
//   return new Proxy({}, {
//     set(target, key, value) {
//       target.length = target.length || 0;
//       target.length++;
//       Reflect.set(target, key, value);
//     },
//     deleteProperty(target, key) {
//       if (key in target) {
//         target.length--;
//         Reflect.deleteProperty(target, key)
//       }
//     },
//     get(target, key) {

//       if (typeof key === 'string' && key.match(/^\d+$/)) {
//         if (!(key in target)) {
//           throw `Prop ${key} não existe no obj`;
//         }
//       }

//       return Reflect.get(target, key);
//     }
//   });
// };

// const pessoas = criaUmArraySQN();

// pessoas[0] = 'Fulano';
// pessoas[1] = 'Beltrano';
// pessoas[2] = 'Pocoyo';
// pessoas['xpto'] = 'Doido'


// delete pessoas[2];

// console.log(pessoas[1]);
// console.log(pessoas.length);


const duck = {
  name: 'Maurice',
  color: 'white',
  greeting: function() {
    console.log(`Quaaaack! My name is ${this.name}`);
  }
}

console.log('name' in duck);
console.log(Reflect.has(duck, 'name'));

console.log(Object.keys(duck));
console.log(Reflect.ownKeys(duck));

duck.color = 'Preto';
console.log(duck.color);
Reflect.set(duck, 'color', 'Black');
console.log(duck.color);