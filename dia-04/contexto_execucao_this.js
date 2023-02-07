const obj = {
  p: 100,
  getP: function() {
    return this.p;
  }
};
console.log(obj.getP());

const obj2 = {
  p: 100,
  getP: function() {
    function fn1() {
      return this.p;
    }
    return fn1();
  }
};
console.log(obj2.getP());
