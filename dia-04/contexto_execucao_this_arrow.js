const obj = {
  p: 100,
  getP: function() {
    const fn1 = function () {
      return this.p;
    }
    return fn1();
  }
};
console.log(obj.getP());

const obj2 = {
  p: 100,
  getP: function() {
    const fn1 = () => {
      return this.p;
    }
    return fn1();
  }
};
console.log(obj2.getP());