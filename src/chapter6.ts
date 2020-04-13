export const chapter6 = "chapter6";

// Sid 123 - the const type
let d: (number | { x: number })[] = [1, { x: 2 }];
let e: readonly [number, { x: 2 }] = [1, { x: 2 }] as const;
d[0] = { x: 17 };
console.log(d);

// Sid 126 - type refinement

function main() {
  const num = parse("17");
  if (!num) return;
  use(num);
}

function parse(s: string): number | null {
  if (s.length == 0) return null;
  return parseInt(s);
}

function use(num: number) {
  console.log(`Number: ${num}`);
}

// Sid 137 - the Record type

type Digit =
  | "Zero"
  | "One"
  | "Two"
  | "Three"
  | "Four"
  | "Five"
  | "Six"
  | "Seven"
  | "Eight"
  | "Nine";

function digitValue(digit: Digit) {
  const r: Record<Digit, number> = {
    Zero: 0,
    One: 1,
    Two: 2,
    Three: 3,
    Four: 4,
    Five: 5,
    Six: 6,
    Seven: 7,
    Eight: 8,
    Nine: 9
  };
  return r[digit];
}

let digit: Digit = "Three";

console.log(`digitValue(digit): ${digitValue(digit)}`);

// Sid 139 - mapped types

type A = {
  a: string;
  b: number;
  c: boolean;
};

type B = Pick<A, "a" | "b">;

let a: A = {
  a: "foo",
  b: 17,
  c: true
};
console.log(a);

let b: B = {
  a: "foo",
  b: 17
};
console.log(b);

// Sid 141 - improving type inference for tuples

function tuple<T extends unknown[]>(...ts: T): T {
  return ts;
}

const t = tuple(1, true);
console.log(t);
t.push(17);
t[0] = 17;
console.log(t);
// readonly?

// Exercise 3

type Exclusive<T, U> =
  | (T extends U ? (U extends T ? never : T) : T)
  | (U extends T ? (T extends U ? never : U) : U);

type E = Exclusive<1 | 2 | 3, 2 | 3 | 4>;
let one: E = 1;
// let two: E = 2;
// let three: E = 3;
let four: E = 4;

// Exercise 4

let globalCache = {
  get(key: string) {
    return "user";
  }
};

let userId = fetchUser();
userId.toUpperCase();

function fetchUser() {
  return globalCache.get("userId");
}
