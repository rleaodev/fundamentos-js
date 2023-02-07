function fn1() {
  let v1 = 1;
  return {
    m1() {
      console.log(++v1);
    },
    m2() {
      console.log(--v1);
    }
  }
};

const obj1 = fn1();
console.log(obj1);
obj1.m1();
obj1.m1();
obj1.m2();

let n = 10;
--n;
--n;
--n;

console.log(n);