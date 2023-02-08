function multiplica(a, b) {
  return new Promise(function(resolve, reject) {
    if (!a || !b) reject('Faltou numero');
    setTimeout(function() {
      resolve(a * b);
    }, 1000)    
  })
}
  Promise.allSettled([
    multiplica(2),
    multiplica(5, 5)
  ])
    .then(function(resultados) {
      console.log(resultados)
    const [aObj, bObj] = resultados;

    if (aObj.status === 'rejected') {
      console.log('Envia e-mail com msg de erro: ' + aObj.reason);
    }

    console.log(bObj)
    })
    .catch(function(msgErro) {
      console.error(msgErro)
    });