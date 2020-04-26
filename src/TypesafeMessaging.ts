export class Sender<Messages extends Record<PropertyKey, object>> {
  constructor(private _send: (message: object) => void) {}

  send<K extends keyof Messages>(type: K, data: Messages[K]) {
    this._send({ type, data });
  }
}

export class Receiver<Messages extends Record<PropertyKey, object>> {
  constructor(private _on: (listener: (message: object) => void) => void) {}

  private events = new Map<keyof Messages, (data: any) => void>();

  on<K extends keyof Messages>(type: K, listener: (data: Messages[K]) => void) {
    this.events.set(type, listener);
    return this;
  }

  listen() {
    this._on((message: any) => {
      this.events.get(message.type)?.(message.data);
    });
  }
}
