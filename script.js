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


/// Queue (FIFO – First In First Out)

// First person enters
// First person leaves


class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    console.log(this.items);
  }
}

// Example
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.print(); // [1,2,3]

console.log(queue.dequeue()); // 1
console.log(queue.front());   // 2





