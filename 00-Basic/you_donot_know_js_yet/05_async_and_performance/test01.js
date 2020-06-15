function now() {
  return 21;
}

function later() {
  answer = answer * 2;
  console.log("Meaning for life:", answer);
}

var answer = now();

setTimeout(later, 1000);

var a = {
  index: 1,
}

console.log(a);

a.index++;