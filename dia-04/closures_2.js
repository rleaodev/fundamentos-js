const v1 = 10;
function fn1() {
  console.log(v1);
}

function fn2(fn) {
  const v1 = 100;
  fn();
}

fn2(fn1);