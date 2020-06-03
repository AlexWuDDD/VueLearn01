//Existence

var myObject = {
  a:2
}

console.log("a" in myObject);
console.log("b" in myObject);

console.log(myObject.hasOwnProperty("a"));
console.log(myObject.hasOwnProperty("b"));

console.log(4 in [2, 4, 6]);