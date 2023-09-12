/************************** Priority Queue *******************************/

/*
PriorityQueue:
    data: array to store elements

Initialize PriorityQueue:
    Create an empty array for data

Insert(element, priority):
    Add a tuple (element, priority) to the data array
    Bubble up the newly added element to maintain the min-heap property

RemoveMin():
    Swap the first element (min) with the last element in the data array
    Remove the last element (min) from the data array
    Bubble down the first element (formerly the last element) to maintain the min-heap property

PeekMin():
    Return the first element in the data array (the element with the highest priority)

isEmpty():
    Return true if the data array is empty, false otherwise

*/

class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(element, priority) {
        const queueElement = {element, priority}
        let added = false;

        for (let i = 0; i < this.items.length; i++) {
            if (priority < this.items[i].priority) {
                this.items.splice(i, 0, queueElement);
                break;
            }
        }
        if (!added) {
            this.items.push(queueElement);
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return 'Priority Queue is Empty';
        }
        return this.items.shift().element;
    }

    front() {
        if (this.isEmpty()) {
            return 'Priority Queue is Empty';
        }
        return this.items[0].element;
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

const priorityQueue = new PriorityQueue();

priorityQueue.enqueue("Task A", 2);
priorityQueue.enqueue("Task B", 1);
priorityQueue.enqueue("Task C", 3);

console.log("Front :", priorityQueue.front()); // Front : Task B
console.log("Size :", priorityQueue.size()); // Size : 4

priorityQueue.dequeue();

console.log("Front :", priorityQueue.front()); // Front : Task A
console.log("Size :", priorityQueue.size()); // Size : 3