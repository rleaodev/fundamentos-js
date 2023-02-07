let counter = 0;
console.time('performance');

while (counter < 100000) {
  'Javascript';
  counter++;
}

console.timeEnd('performance');