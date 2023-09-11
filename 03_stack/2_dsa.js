
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if(this.isEmpty()) {
            return `Stack is Empty` 
        }
        this.items.pop(); 
    }

    peek() {
        if(this.isEmpty()) {
            return `Stack is Empty` 
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length; 
    }

    clear() {
        return this.items.length = 0;
    }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log("peek", stack.peek()); // peek 3
console.log("size", stack.size()); // size 3

stack.pop();
console.log("peek", stack.peek()); // peek 2