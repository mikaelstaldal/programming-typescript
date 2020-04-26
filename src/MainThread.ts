import { fork } from "child_process";
import { Sender } from "./TypesafeMessaging";
import { Messages } from "./Messages";

console.log("main start");

const child = fork("./lib/ChildThread.js");

console.log(`child ${child.pid} forked`);

const sender = new Sender<Messages>(message => child.send(message));

// sender.send("abc", {}); // fel
// sender.send("foo", {}); // fel
sender.send("foo", { one: "ett", two: 2 });
sender.send("bar", { another: "one", baz: true, whatever: { a: 17, b: 4711 } });

console.log("main end");
