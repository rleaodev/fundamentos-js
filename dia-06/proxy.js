function criaUmArraySQN () {
  return new Proxy({}, {
    set(target, key, value) {
      target.length = target.length || 0;
      target.length++;
      target[key] = value;
    },
    deleteProperty(target, key) {
      if (key in target) {
        target.length--;
        delete target[key];
      }
    },
    get(target, key) {

      if (typeof key === 'string' && key.match(/^\d+$/)) {
        if (!(key in target)) {
          throw `Prop ${key} não existe no obj`;
        }
      }

      return target[key];
    }
  });
};

const pessoas = criaUmArraySQN();

pessoas[0] = 'Fulano';
pessoas[1] = 'Beltrano';
pessoas[2] = 'Pocoyo';
pessoas['xpto'] = 'Doido'


delete pessoas[2];

console.log(pessoas[5]);
console.log(pessoas.length);