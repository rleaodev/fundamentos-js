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
    const a = await multiplica(2);
    const b = await multiplica(5, 5);
    const resultado = await multiplica(a, b);
    
    console.log({
      a,
      b,
      resultado
    });
  } catch (e) {
    console.error(e);
  }
})();