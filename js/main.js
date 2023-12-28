var a = 1;
var b = 100;
cutededler(a, b);
function cutededler(a, b) {
  for (let i = a; i <= b; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
