function multiplica(a, b) {
  return new Promise(function(resolve, reject) {
    if (!a || !b) reject('Faltou numero');
    setTimeout(function() {
      resolve(a * b);
    }, 1000)    
  })
}

(async function() {
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

    console.log('finalizou o rolê', resultado_final_soma)

  } catch (e) {
    console.error(e);
  }
})();