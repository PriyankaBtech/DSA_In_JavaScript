/************************* Queue *******************************/
/*
Queue (Data Structure):
- Create an empty queue

Operations:
- Enqueue(element): Add 'element' to the back of the queue
- Dequeue(): Remove and return the front element of the queue
- Front(): Return the front element without removing it
- IsEmpty(): Check if the queue is empty
- Size(): Return the number of elements in the queue

Example Usage:
- Enqueue(10)  // Queue: [10], front: 0, rear: 0
- Enqueue(20)  // Queue: [10, 20], front: 0, rear: 1
- Enqueue(30)  // Queue: [10, 20, 30], front: 0, rear: 2
- Front()     // Returns 10, Queue: [10, 20, 30], front: 0, rear: 2
- Dequeue()   // Returns 10, Queue: [20, 30], front: 1, rear: 2
- IsEmpty()   // Returns false
- Size()      // Returns 2
- Dequeue()   // Returns 20, Queue: [30], front: 2, rear: 2
- Dequeue()   // Returns 30, Queue: [], front: 3, rear: 2
- IsEmpty()   // Returns true

*/

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return 'Queue is Empty';
        }
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) {
            return 'Queue is Empty';            
        }
        return this.items[0];
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


const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log('Front :', queue.front()); // Front : 1
console.log('Size :', queue.size()); // Size : 3

queue.dequeue();
console.log('Front :', queue.front()); // Front : 2
console.log('Size :', queue.size()); // Size : 2