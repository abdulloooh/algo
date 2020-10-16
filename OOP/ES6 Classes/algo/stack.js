//Build a STACK

const _store = new WeakMap();

class Stack {
  constructor() {
    _store.set(this, []);
  }

  push(item) {
    _store.get(this).push(item);
  }

  pop() {
    const store = _store.get(this);
    if (store.length === 0) throw new Error("Stack is empty");
    store.pop();
  }

  peak() {
    const store = _store.get(this);
    if (store.length === 0) throw new Error("Stack is empty");
    return store[store.length - 1];
  }

  get count() {
    return _store.get(this).length;
  }
}

const stack = new Stack();
console.log(stack);
