function fn1() {
  const v1 = 1;
  return function() {
    console.log(v1);
  }
}

const fn2 = fn1();
// const v1 = 100;
fn2();