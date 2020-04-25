export const chapter7 = "chapter7";

// Sid 150-151 - returning null

function opt(n: number): string | null {
  if (n == 0) return null;
  else return n.toString();
}

const x: string = opt(0) ?? "";
console.log(`x: '${x}'`);

const y: string = opt(1) ?? "";
console.log(`x: '${y}'`);

function foo(n: number) {
    const s = opt(n);
    if (!s) return;
    bar(s);
}

function bar(s: string) {
  console.log(`s: '${s}'`);
}

foo(0);
foo(17);
