//// Min Stack (Design Problem)

// Concept: Maintain two stacks:

// One for values
// One for tracking minimum

class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val);
        if (
            this.minStack.length === 0 ||
            val <= this.getMin()
        ) {
            this.minStack.push(val);
        }
    }

    pop() {
        if (this.stack.pop() === this.getMin()) {
            this.minStack.pop();
        }
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

// Example
let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // -3
minStack.pop();
console.log(minStack.top());    // 0
console.log(minStack.getMin()); // -2





