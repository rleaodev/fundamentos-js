function multiplica(a, b) {
  return new Promise(function(resolve, reject) {
    if (!a || !b) reject('Faltou numero');
    setTimeout(function() {
      resolve(a * b);
    }, 10000)    
  })
}
async function mostraResultado() {
  try {
    const resultados = await Promise.all([
      multiplica(2, 2), 
      multiplica(5, 5)
    ]);

    let resultado_final_soma = 0;

    for await(let resultado of resultados) {
      resultado_final_soma += await multiplica(resultado, 1);
      console.log(resultado);
    }

    return resultado_final_soma;

  } catch (e) {
    console.error(e);
    throw e;
  }
};

mostraResultado()
  .then((re) => console.log(re))
  .catch((error) => console.log('Ferrou ', error))
  .finally(() => console.log('processo finalizou'));

console.log('aqui');