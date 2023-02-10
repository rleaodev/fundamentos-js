function* buscaDoDB() {
  const dataset = [{
    nome: 'Vinicius',
    idade: 20,
    aparenta: 40
  }, {
    nome: 'Rene',
    idade: 30,
    aparenta: 40
  }, {
    nome: 'Rafael',
    idade: 32,
    aparenta: 50
  }];
  let totalDeRegistros = dataset.length;

  for (let i in dataset) {
    yield {
      data: dataset[i],
      total: totalDeRegistros--
    }
  }
}

function processoFalso(data) {
  console.log('fazendo um processamento muito maroto com esse dado: ', data);
}

const gen = buscaDoDB();

console.log(gen)
console.log(Object.getOwnPropertyNames(gen.__proto__.__proto__));

let { value: { data, total } } = gen.next();

processoFalso(data);

while (total > 1) {
  const currentData = gen.next();

  processoFalso(currentData.value.data);
  total--;
}