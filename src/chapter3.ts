export const chapter3 = "chapter3";

let a: number = 1 + 2;
let b: number = 1 + 3;
let c: { banana: number; apple: number } = {
  apple: a,
  banana: b,
};
let d: number = c.apple;

function foo(x: boolean) {
  if (x) {
    return 5;
  } else {
    return "hello";
  }
}

let aa: unknown = 5;
let bb = !aa;
console.log(aa);
console.log(bb);

let s = Symbol("foo");
console.log(s);

let dd;
dd = 5;
console.log(dd);

let p = true;
let u;
if (p) {
  u = 5;
} else {
  u = "foo";
}
//let uu = u * 7
//console.log(uu)

let t: [number, string] = [5, "fem"];
console.log(t);
t.push(11); // dumt att detta är tillåtet!
t[0] = 6; // OK
console.log(t);
console.log(typeof t);

let h = null;

function f() {
  let t: [number, string] = [5, "fem"];
  t.push(11); // dumt att detta är tillåtet!
  return t;
}

let ttt = f();
console.log(ttt);
ttt.push(17);
console.log(ttt);
