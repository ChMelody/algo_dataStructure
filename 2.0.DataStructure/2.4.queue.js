// Queues
// Time complexity: insertion O(1), removal O(1), search O(n), access O(n)

// Similar to stack, adding and removing data
// FIFO (first in first out)
// Waiting in line for example

// How do we use queue in programming?
// Background tasks, uploading resources, printing/task processing

// Implementations:
// Array
// Class

// Array
let q = [];
// Either method will have to re-index the entire queue O(n)
// remove <- [  ] <- add
q.push('First');
q.shift();

// or
// add -> [  ] -> remove
q.unshift("first");
q.pop();


// Class
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // Add to the end [ ] <- add
    enqueue(val){
        let newNode = new Node(val)
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    // Remove from the beginning  remove <- [ ]
    dequeue(){
        if(!this.first) return null;

        let oldFirst = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return oldFirst.val;
    }
}

let queue = new Queue()
queue.enqueue('hi')
console.log(queue.dequeue())
console.log(queue)