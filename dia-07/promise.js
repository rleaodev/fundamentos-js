function multiplica(a, b) {
  return new Promise(function(resolve, reject) {
    if (!a || !b) reject('Faltou numero');
    setTimeout(function() {
      resolve(a * b);
    }, 1000)    
  })
}

multiplica(2,2)
  .then(function(resultado_primeira_operacao) {
    return multiplica(5, 5).then(function(resultado_segunda_operacao) {
        return multiplica(resultado_primeira_operacao, resultado_segunda_operacao).then(function(resultado_final) {
            console.log(resultado_final);
          })
      });
  }).catch(function(msgErro) {
    console.error(msgErro)
  });
