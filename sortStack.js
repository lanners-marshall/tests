class Stack {
  constructor() {
    this.storage = [];
  }

  push(item) {
    this.storage.push(item);
  }

  pop() {
    return this.storage.pop();
  }

  peek() {
    return this.storage[this.storage.length-1];
  }

  isEmpty() {
    return this.storage.length === 0;
  }

  printContents() {
    this.storage.forEach(elem => console.log(elem));
  }
}

const s = new Stack();
s.push(4);
s.push(10);
s.push(8);
s.push(5);
s.push(1);
s.push(6);

// Write a function sortStack that receives a stack of integers into ascending order (with largest integers on top) and returns another stack with sorted integers. You may use at most one additional stack to hold items, but you may not copy the elements into any other data structure.

const sortedStack = (s) => {
  let stack = new Stack()
  let store = s.storage
  let holder

  while (!s.isEmpty()) {
    const temp = s.pop();
    while (!stack.isEmpty() && stack.peek() > temp) {
      s.push(stack.pop());
    }
    stack.push(temp);
  }
  console.log(stack)
}

sortedStack(s)
