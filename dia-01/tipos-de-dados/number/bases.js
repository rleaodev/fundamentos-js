console.log(10, 9.9);
console.log(0xFF);
console.log(0b11);
console.log(0o7);

function toBin(n) {
  return (n).toString(2).padStart(32, 0)
}