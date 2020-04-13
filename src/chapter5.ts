export const chapter5 = "chapter5";

// Sid 89 - Using this as a Return Type

class Printer {
  print(s: string) /*: this */ {
    // return type can be inferred
    console.log(s);
    return this;
  }
}

class UpperCasePrinter extends Printer {
  print(s: string) /*: this */ {
    // return type can be inferred
    super.print(s.toUpperCase());
    return this;
  }
}

let printer = new Printer();
let upperPrinter = new UpperCasePrinter();

printer.print("Hello, ").print("World!");
upperPrinter.print("Hello, ").print("World!");

// Sid 101-104 - Mixins
// Verkar vara ett komplicerat sätt att göra det på, och lätt att göra fel
// Här behövs starka konventioner, som helst stöds av språket.
// Decorators kan vara ett sätt att få det.

// Annonymous class

interface Human {
  say(what: string): void;
}

class Klas implements Human {
  say(what: string) {
    console.log("Klas:", what);
  }
}

let Kalle = class implements Human {
  say(what: string) {
    console.log("Kalle:", what);
  }
};

let klas1 = new Klas();
klas1.say("Hej 1");
let klas2 = new Klas();
klas2.say("Hej 2");
new Klas().say("Hej 3");
new Klas().say("Hej 4");

let kalle1 = new Kalle();
kalle1.say("Hej 1");
let kalle2 = new Kalle();
kalle2.say("Hej 2");
new Kalle().say("Hej 3");
new Kalle().say("Hej 4");

// Exercise 2

class MessageQueue {
  protected constructor(private messages: string[]) {}
}

class EmptyQueue extends MessageQueue {
  constructor() {
    super([]);
  }
}

new EmptyQueue();

// Exercise 3

interface Shoe {
  purpose: string;
}

class BalletFlat implements Shoe {
  purpose = "dancing";
}

class Boot implements Shoe {
  purpose = "woodcutting";
}

class Sneaker implements Shoe {
  purpose = "walking";
}

const Shoe: {
  create(type: "BalletFlat"): BalletFlat;
  create(type: "Boot"): Boot;
  create(type: "Sneaker"): Sneaker;
} = {
  create: (type: "BalletFlat" | "Boot" | "Sneaker") => {
    switch (type) {
      case "BalletFlat":
        return new BalletFlat();
      case "Boot":
        return new Boot();
      case "Sneaker":
        return new Sneaker();
    }
  }
};

let boot = Shoe.create("Boot");
console.log("Boot", boot.purpose);
