const pessoa = {};

/****************************************** */
// Object.defineProperty(pessoa, 'nome', {
//   value: 'Fulano',
// });
// pessoa.nome = 'Doido';
// console.log(pessoa.nome);
// console.log(Object.keys(pessoa));
// console.log(Object.values(pessoa));
// console.log(Object.entries(pessoa));
// delete pessoa.nome
// console.log(pessoa);

/****************************************** */
// Object.defineProperty(pessoa, 'nome', {
//   value: 'Fulano',
//   enumerable: true,
// });

// pessoa.nome = 'Doido';
// console.log(pessoa);
// console.log(Object.keys(pessoa));
// console.log(Object.values(pessoa));
// console.log(Object.entries(pessoa));
// delete pessoa.nome
// console.log(pessoa);

/****************************************** */
// Object.defineProperty(pessoa, 'nome', {
//   value: 'Fulano',
//   enumerable: true,
//   writable: true,
// });

// pessoa.nome = 'Doido';
// console.log(pessoa);
// console.log(Object.keys(pessoa));
// console.log(Object.values(pessoa));
// console.log(Object.entries(pessoa));
// delete pessoa.nome
// console.log(pessoa);

/****************************************** */
Object.defineProperty(pessoa, 'nome', {
  value: 'Fulano',
  enumerable: true,
  writable: true,
  configurable: true,
});

pessoa.nome = 'Doido';
console.log(pessoa);
console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));
delete pessoa.nome
console.log(pessoa);