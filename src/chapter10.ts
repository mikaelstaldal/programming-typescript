export default null; // Force module mode

// Sid 222-226 - Namespaces

export namespace One {
  let count = 0;

  export function foo(s: string) {
    count++;
    return x(s.length);
  }

  function x(l: number) {
    return (l + count).toString(10);
  }
}

namespace Two {
  let count = 0;

  export function foo(s: string) {
    count++;
    return x(s.length);
  }

  function x(l: number) {
    return (l + count).toString(10);
  }
}

console.log(One.foo("Kalle Anka och hans vänner"));
console.log(Two.foo("Kalle Anka"));
console.log(Two.foo("Kalle Anka"));
console.log(Two.foo("Kalle Anka"));
console.log(One.foo("Kalle Anka och hans vänner"));

// Exercise 1a

interface Currency {
  unit: "EUR" | "GBP" | "JPY" | "USD";
  value: number;
}

namespace Currency {
  export const DEFAULT = "USD";
  export function from(value: number, unit: Currency["unit"] = DEFAULT): Currency {
    return { unit, value };
  }
}

const ukMoney: Currency = Currency.from(110, "GBP");
const usMoney: Currency = Currency.from(110);

console.log(ukMoney);
console.log(usMoney);

// Exercise 1b

enum Color {
  RED = "#ff0000",
  GREEN = "#00ff00",
  BLUE = "#0000ff",
}

namespace Color {
  export const DEFAULT: Color = Color.RED;
  export function next(color: Color): Color {
    switch (color) {
      case Color.RED:
        return Color.GREEN;
      case Color.GREEN:
        return Color.BLUE;
      case Color.BLUE:
        return Color.RED;
    }
  }
}

console.log(`${Color.DEFAULT} -> ${Color.next(Color.DEFAULT)}`);
