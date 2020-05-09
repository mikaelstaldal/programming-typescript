export default null; // Force module mode

class Counter {
  private count: number = 0;

  public inc() {
    try {
      console.log(this);
      this.count++; // this (sic!) does not work!
      console.log(this);
    } catch (e) {
      console.error(e);
    }
  }

  public get() {
    console.log(this);
    return this.count;
  }
}

const counter = new Counter();

setTimeout(counter.inc, 1000);

setTimeout(() => console.log(counter.get()), 2000);
