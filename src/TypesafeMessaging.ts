export function Sender<Messages extends Record<PropertyKey, object>>(
  _send: (message: object) => void
) {
  const send = <K extends keyof Messages>(type: K, data: Messages[K]) => {
    _send({ type, data });
  };

  return { send } as const;
}

export function Receiver<Messages extends Record<PropertyKey, object>>() {
  const events = new Map<keyof Messages, (data: any) => void>();

  const on = <K extends keyof Messages>(type: K, listener: (data: Messages[K]) => void) => {
    events.set(type, listener);
    return me;
  };

  const dispatch = (message: any) => {
    try {
      events.get(message.type)?.(message.data);
    } catch (e) {
      console.error(e);
    }
  };

  const me = { on, dispatch } as const;
  return me;
}
