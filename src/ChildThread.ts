import { Receiver } from "./TypesafeMessaging";
import { Messages } from "./Messages";

console.log("child start");

new Receiver<Messages>((listener) => process.on("message", listener))
  // .on("abc", _ => {}) // fel
  .on("foo", foo)
  .on("bar", bar)
  .listen();

console.log("child listening");

function foo(data: Messages["foo"]) {
  console.log(`child foo: ${data.one}`);
}

function bar(data: Messages["bar"]) {
  console.log(`child bar: ${data.another}`);
}
