// Doubly Linked List
// Time complexity: insertion O(1), removal O(1), search O(n), access O(n) -> technically O(n/2)
// More flexibility compares to singly linked list 
// BUT takes up more memory

class Node {
    constructor(value){
        this.val = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null; 
        this.length = 0;
    }

    push(value){
        // Create a new node with the value passed to the function
        let newNode = new Node(value);
        // If the head property is null, set the head and tail to be the newly created node
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            // If not, set the next property on the tail to be the new node
            this.tail.next = newNode;
            // Set the prev property on the newly created node to be the tail
            newNode.prev = this.tail;
            // Set the tail to be the newly created node
            this.tail = newNode;
        }
        // Increment the length
        this.length += 1;
        // Return the Doubely Linked List
        return this;
    }

    // Removing a node from the back of the doubly inked list
    pop(){
        // If there is no head, return undefined
        if(!this.tail) return undefined;
        // Store the current tail in a variable to return later
        let oldTail = this.tail;
        // If the length = 1, set the head and tail to be null
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            // Update the tail to be the previous Node
            this.tail = oldTail.prev;
            // Set the newTail's next to null
            this.tail.next = null;
            // Set oldTail's prev to null so it no longer attaches to anything
            oldTail.prev = null;
        }
        // Decrement length by 1
        this.length -= 1;
        return oldTail;
    }

    // Removing a node from the beginning of the doubly linked list
    shift(){
        if(!this.head) return undefined;

        let oldHead = this.head;

        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            // Update the head to be the next of the old head
            this.head = oldHead.next;
            // Set the head's prev to null
            this.head.prev = null;
            // Set the old head's next to null
            oldHead.next = null;
        }
        this.length -= 1;
        return oldHead; 
    }

    // Adding new node to the beginning of the doubly linked list
    unshift(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode; 
        } else {
            // Set newNode's next to point to current head
           newNode.next = this.head;
           // Set current head's prev to newNode
           this.head.prev = newNode; 
           // Reassign the head to the newNode
           this.head = newNode; 
        }
        this.length += 1;
        return this;
    }

    // Accessing a node in a doubly linked list by its position
    get(index){
        if(index < 0 || index >= this.length) return null;

        let count = 0;
        let nodeFound = this.head;

        // If the index <= list.length/2
        if(index <= this.length/2){
            // Loop from the head towards the middle
            while(count !== index){
                nodeFound = nodeFound.next;
                count++; 
            }
        } else {
            // Loop from the tail towards the middle
            count = this.length - 1;
            nodeFound = this.tail;
            while(count !== index){
                nodeFound = nodeFound.prev;
                count--;
            }
        }
        // Return the node once its found
        return nodeFound; 
    }

    // Replacing the value of a node at a specific position to value passsed in
    set(index, value){
        let nodeToSet = this.get(index)
        // If node exists, replace the value and return true
        if(nodeToSet){
            nodeToSet.val = value;
            return true;
        }
        // Otherwise, return false
        return false;
    }

    // Adding a node in a doubly linked list by a certain position
    insert(index, value){
        // If index < 0 or > list length, return false
        if(index < 0 || index > this.length) return false;

        // If index = list.length, push a new node to the end of the list & return true
        if(this.length === index) return !!this.push(value);

        // If index = 0, unshift a new node to the beginning of the list & return
        if(index === 0) return !!this.unshift(value);

        let beforeNode = this.get(index);
        let afterNode = beforeNode.next; 
        let newNode = new Node(value);
        // Set relationships between beforeNode and newNode
        beforeNode.next = newNode, newNode.prev = beforeNode;
        // Set relationships between afterNode and newNode
        afterNode.prev = newNode, newNode.next = afterNode;

        this.length += 1;
        return true;
    }

    // Removing a node in a doubly linked list by a certain position
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift()
        if(index === this.length -1) return this.pop()

        let nodeToRemove = this.get(index)
        let nodePrev = nodeToRemove.prev;
        let nodeNext = nodeToRemove.next;

        nodePrev.next = nodeNext;
        nodeNext.prev = nodePrev;

        nodeToRemove.prev = null;
        nodeToRemove.next = null;

        this.length -= 1;
        return nodeToRemove;
    }
}

let list = new DoublyLinkedList()
list.push(20)            // 0
list.push(80)            // 1
list.push('Last Item!!') // 2
// list.unshift('I am NEW') // 0
