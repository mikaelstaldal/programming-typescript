export default null; // Force module mode

import { readFile } from "fs";

// Sid 178-183 - promises

function readFilePromise(path: string): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    readFile(path, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

// man kan skicka antingen en ren funktion eller en asynkron funktion som returnerar en ny promise till Promise.then()
// annat än i Java och Scala där man har thenApply/thenCompose respsktive map/flatMap
function promiseChain() {
  return readFilePromise("filename")
    .then((buffer) => buffer.toString("UTF-8"))
    .then((filename) => readFilePromise(filename))
    .then((buffer) => buffer.toString("UTF-8"))
    .then((s) => console.log(`File content: ${s}`))
    .catch((error) => console.error(error))
    .finally(() => console.log("Klart"));
}

promiseChain();

// Sid 183-184 - async and await

// transpileras await -> yield och en wrapper-funktion "__awaiter"
async function asyncAwait() {
  try {
    const fileNameContent = await readFilePromise("filename");
    const fileName = fileNameContent.toString("UTF-8");
    const fileContent = await readFilePromise(fileName);
    const s = fileContent.toString("UTF-8");
    console.log(`File content: ${s}`);
  } catch (e) {
    console.error(e);
  } finally {
    console.log("Klart");
  }
}

asyncAwait();
