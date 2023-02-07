/** forEach */
// const pessoas = ['João', 'Maria', 'José'];
// pessoas.forEach(pessoa => console.log(pessoa));

/** filter */
// const pessoas = [{
//   nome: 'João',
//   idade: 20,
// }, {
//   nome: 'Maria',
//   idade: 17
// },{
//   nome: 'José',
//   idade: 25
// }];

// const resultado = pessoas.filter(pessoa => pessoa.nome);
// console.log(resultado);

/** find */
// const pessoas = [{
//   nome: 'João',
//   idade: 20,
// }, {
//   nome: 'Maria',
//   idade: 17
// },{
//   nome: 'José',
//   idade: 25
// }, {
//   nome: 'Josefa',
//   idade: 27
// }];

// const resultado = pessoas.find(pessoa => pessoa.idade >= 25);
// console.log(resultado);

/** some */
// const pessoas = [{
//   nome: 'João',
//   idade: 20,
// }, {
//   nome: 'Maria',
//   idade: 17
// },{
//   nome: 'José',
//   idade: 25
// }, {
//   nome: 'Josefa',
//   idade: 27
// }];

// const resultado = pessoas.some(pessoa => pessoa.idade >= 525);
// console.log(resultado);

/** every */
// const pessoas = [{
//   nome: 'Marco',
//   idade: 20,
// }, {
//   nome: 'Maria',
//   idade: 17
// },{
//   nome: 'Mônica',
//   idade: 25
// }, {
//   nome: 'Mufasa',
//   idade: 27
// }];

// const resultado_idade = pessoas.every(pessoa => pessoa.idade >= 25);
// console.log(resultado_idade);

// const resutado_nome = pessoas.every(pessoa => pessoa.nome.startsWith('M'));
// console.log(resutado_nome);

/** map */
// const pessoas = [{
//   nome: 'João',
//   idade: 20,
// }, {
//   nome: 'Maria',
//   idade: 17
// },{
//   nome: 'José',
//   idade: 25
// }, {
//   nome: 'Josefa',
//   idade: 27
// }];

// const resultado = pessoas.map((pessoa) => {
//   return {
//     nome: pessoa.nome
//   }
// });
// console.log(resultado);
// console.log(pessoas);

/** reduce */
// const pessoas = [{
//   nome: 'João',
//   idade: 20,
// }, {
//   nome: 'Maria',
//   idade: 17
// },{
//   nome: 'José',
//   idade: 25
// }, {
//   nome: 'Josefa',
//   idade: 27
// }];

// const resultado = pessoas.reduce(function (acumulador, pessoa) {
//   return acumulador + pessoa.idade
// }, 0);
// console.log(resultado);