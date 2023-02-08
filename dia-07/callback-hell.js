function multiplica(a, b, callback) {
  setTimeout(function() {
    callback(a * b);
  }, 1000)
}


multiplica(2,2, function(resultado_primeira_operacao) {
  multiplica(5, 5, function(resultado_segunda_operacao) {
    multiplica(resultado_primeira_operacao, resultado_segunda_operacao, function(resultado_final) {
      console.log(resultado_final);
    })
  });
});
