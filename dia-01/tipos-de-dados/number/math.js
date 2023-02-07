console.log('abs');
console.log(Math.abs(-4.4)); // 4.4
console.log(Math.abs(4.4));

console.log('ceil');
console.log(Math.ceil(1.1)); // 2
console.log(Math.ceil(1.9)); // 2
console.log(Math.ceil(-1.9)); // 0, 0

console.log('floor');
console.log(Math.floor(1.1)); // 1
console.log(Math.floor(1.9)); // 1
console.log(Math.floor(-1.9)); // -2

console.log('round');// < .5 == floor .5 > == ceil
console.log(Math.round(4.4)); // 4
console.log(Math.round(4.5)); // 4,5
console.log(Math.round(-4.5)); // -4, -5
console.log(Math.round(-4.6)); // -4, -4

console.log('trunc');
console.log(Math.trunc(4.4));
console.log(Math.trunc(4.5));
console.log(Math.trunc(-4.5));
console.log(Math.trunc(-4.6));

console.log('min');
console.log(Math.min(19, 20, -1, 2, 0, -4, -4.2));

console.log('max');
console.log(Math.max(19, 20, -1, 2, 0, -4, -4.2));

console.log('random');
console.log(Math.random());