// Stack are abstract data structure for data collection

// Time complexity: insertion O(1), removal O(1), search O(n), access O(n)
// LIFO (last in first out, remove from top which also is the last thing added to the stack)
// Call stack for example

// Where stacks are used? 
// Managing function invocations, undo/redo, routing (the history object) is treated like a stack

// Implementations: 
// (not ideal) Array, not a build in data structure in JavaScript but are relatively simple to implement
//      - it's not efficient, however, push()/pop() - O(1) is better than shift()/unshift() - O(n)
// (preferred) Class / SinglyLinkedList - pop()/push() method we wrote is not efficient - O(n) because we have to traverse the entire linked list until the one before last,
//        instead, shift()/unshift() we wrote is O(1) time

// Array
let s = [];
// This is better, O(1) time
s.push('hi');
s.pop()

// or
// Not efficient, have to re-index the entire stack - O(n) time
s.unshift('Hello')
s.shift()

// Class
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    // it was unshift in SinglyLinkedList, adding to the beginning
    push(val){
        let newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let oldFirst = this.first;
            this.first = newNode;
            this.first.next = oldFirst;
        }
        return ++this.size; 
    }

    // this was shift() in SinglyLinkedList, removing from the beginning
    pop(){
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

let stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
