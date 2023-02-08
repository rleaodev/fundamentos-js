function multiplica(a, b) {
  return new Promise(function(resolve, reject) {
    if (!a || !b) reject('Faltou numero');
    setTimeout(function() {
      resolve(a * b);
    }, 1000)    
  })
}

  Promise.all([
    multiplica(2, 2),
    multiplica(5, 5)
  ])
    .then(function(resultados) {
    const [a, b] = resultados;

      return multiplica(a, b).then(function(resultado_final) {
        console.log(resultado_final);
      })
    })
    .catch(function(msgErro) {
      console.error(msgErro)
    });