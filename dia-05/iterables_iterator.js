const pessoas = ['João', 'Maria', 'José'];

// for (let i = 0; i < pessoas.length; i++) {
//   console.log(pessoas[i]);
// }

// for (let chave in pessoas) {
//   console.log(pessoas[chave]);
// }

// pessoas.forEach((value, index) => {
//   console.log(value);
// })

// for (let pessoa of pessoas) {
//   console.log(pessoa);
// }

// const iterator = pessoas[Symbol.iterator]();
// const iteratorEntries = pessoas.entries();
// const iteratorKeys = pessoas.keys();
// const iteratoValues = pessoas.values();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// console.log(iteratorEntries.next());
// console.log(iteratorEntries.next());
// console.log(iteratorEntries.next());
// console.log(iteratorEntries.next());

// console.log(iteratorKeys.next());
// console.log(iteratorKeys.next());
// console.log(iteratorKeys.next());
// console.log(iteratorKeys.next());

// console.log(iteratoValues.next());
// console.log(iteratoValues.next());
// console.log(iteratoValues.next());
// console.log(iteratoValues.next());

// function criaProtocoloIterator(...array) {
//    return {
//     [Symbol.iterator]() {
//       let i = 0;
//       return {
//         next() {
//           if (i < array.length) {
//             return {
//               value: array[i++],
//               done: false,
//             }        
//           } else {
//             return {
//               value: undefined,
//               done: true,
//             }
//           }
//         }
//       }
//     }
//   }
// }

// const meuIterator = criaProtocoloIterator('João', 'Maria', 'José');
// console.log(meuIterator.next());
// console.log(meuIterator.next());
// console.log(meuIterator.next());
// console.log(meuIterator.next());

// for (let xpto of meuIterator) {
//   console.log(xpto);
// }

