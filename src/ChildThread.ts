import { Receiver } from "./TypesafeMessaging";
import { Messages } from "./Messages";

console.log("child start");

const receiver = new Receiver<Messages>()
  // .on("abc", _ => {}) // fel
  .on("foo", foo)
  .on("bar", bar);
process.on("message", receiver.dispatch);

console.log("child listening");

function foo(data: Messages["foo"]) {
  console.log(`child foo: ${data.one}`);
}

function bar(data: Messages["bar"]) {
  console.log(`child bar: ${data.another}`);
}
