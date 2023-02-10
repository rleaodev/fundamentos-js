function* buscaDoDB() {
  const dataset = [{
    nome: 'Vinicius',
    idade: 20,
    aparenta: 30
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
  let i = 0;
  while(true) {
    console.log(i, totalDeRegistros);
    if (totalDeRegistros === 0) {
      return undefined;
    }

    const decrementaPorFavor = yield {
      data: dataset[i],
      total: totalDeRegistros - 1,
    }

    if (decrementaPorFavor === 'decrementa') {
      if (i > 0) i--;
      totalDeRegistros++;
    } else {
      totalDeRegistros--;
    }
  }
}

function processoFalso(data) {
  if (Math.floor(Math.random() * 100) > data.idade) {
    throw "Idade tá cagada";
  }
  console.log('fazendo um processamento muito maroto com esse dado: ', data);
}

const gen = buscaDoDB();

console.log(gen)
console.log(Object.getOwnPropertyNames(gen.__proto__.__proto__));

let { value: { data, total } } = gen.next();

while (total > 1) {
  try {
    const currentData = gen.next();
    console.log(currentData);
    processoFalso(currentData.value.data);
    console.log('aqui')
    total--;
  } catch (e) {
    console.error("Error: ", e)
    gen.next('decrementa')
  }
}