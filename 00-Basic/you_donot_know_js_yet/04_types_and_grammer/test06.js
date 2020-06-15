console.log(parseInt(new String("42")));

var a = {
  num: 21,
  toString: function() { return String( this.num * 2 ); }
};
console.log(parseInt(a)); // 42