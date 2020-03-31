// Sid 46 - declaring functions
let greet = (name: String) => 'hello ' + name
console.log(greet("World"))

let printIt = (s: String) => console.log(s)
printIt("Foo bar")

// Sid 47 - optional parameters
function fOpt(n?: number) {
    let nn: number | undefined = n
    console.log(typeof(nn) + " " + nn)
}
fOpt(17)
fOpt()

// Sid 48 - default parameters
function fDef(n = 0) {
    let nn: number = n
    console.log(typeof(nn) + " " + nn)
}
fDef(17)
fDef()

// Sid 50 - bind
function add(a: number, b: number) {
    return a + b
}
let add5 = add.bind(null, 5) // currying
console.log(add5(10))

// Sid 51 - typing this
function print(this: string) {
    console.log(this)
}
print.call("foo")
// "foo".print() // does not work?

// Sid 58 - contextual typing
function callMe(f: (s: string) => void) {
    f("me")
}
callMe(s => console.log(s))
callMe(console.log)

// Sid 60 - overloaded function types
// Kan man implementera överlagrade funktionstyper en efter en,
// utan att behöva använda kombinerade typer som i exemplet på sidan 61?
// som i Java?
// function fOverloaded(a: number) {
//    return a * 2
//}
//function fOverloaded(a: number, b: number) {
//    return a + b
//}
//function fOverloaded(a: string) {
//    return a + a
//}

let arr = [1, 2, 3]
console.log([...arr, 4])
let obj = {a: 1, b: 2, c: 3}
console.log({...obj, d: 4})

function f1(...args: unknown[]) { console.log(args) }
function f2(...args: unknown[]) { console.log(...args) }
f1(1,2,3)
f2(1,2,3)

// Sid 64 - overloaded function types with properties

type WarnUser = {
    (warn: string): void
    wasCalled: boolean;
}

function warnUser(warning: string) {
    if (warnUser.wasCalled) {
        return;
    }
    warnUser.wasCalled = true;
    console.warn(warning);
}

warnUser.wasCalled = false;

warnUser("foo");
warnUser("bar");

// Sid 77 - Using bounded polymorphism to model arity & exercise 4

function fill(length: number, value: string, upper: boolean): string[] {
    return Array.from({length}, () => upper ? value.toUpperCase() : value)
}

function full(value: string, length: number): string[] {
    return Array.from({length}, () => value)
}

function call<T extends [unknown, string, ...unknown[]], R>(f: (...args: T) => R, ...args: T): R {
    return f(...args)
}

console.log(call(fill, 10, 'a', true))
console.log(call(fill, 10, 'a', false))
// call(full, 'a', 10))

// Exercise 5
function is<T>(a: T, b: T) {
    return a == b
}
/*
function is<T>(a: T, ...args: T[]) {
    for (let b of args) {
        if (!(a == b)) return false
    }
    return true
}
*/

console.log(is('string', 'otherstring')) // false
console.log(is(true, false)) // false
console.log(is(42, 42)) // true
console.log(is([42, 43], [42, 43])) // true
console.log(is([42, 43], [42, 44])) // false
// is(10, 'foo') // Error TS2345: Argument of type '"foo"' is not assignable
// to parameter of type 'number'.
// [Hard] I should be able to pass any number of arguments
//console.log(is(1, 12)) // false
//console.log(is(1, 1)) // true
//console.log(is(1, 12, 123)) // false
//console.log(is(1, 1, 1)) // true

// Hur jämför man två arrayer?
