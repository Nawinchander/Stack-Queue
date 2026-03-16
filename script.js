///// Stack (LIFO – Last In First Out)

// Push → add plate on top
// Pop  → remove plate from top


class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    console.log(this.items);
  }
}

// Example
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.print();      // [10,20,30]
console.log(stack.pop()); // 30
console.log(stack.peek()); // 20


