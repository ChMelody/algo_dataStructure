// Singly Linked Lists
// Time complexity: Insertion O(1), Removal - it depends O(1) or O(n), Search O(n), Access O(n)

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Adding a node from the end of the linked list. This function should accept a valueue
    push(value){
        // Create a new node using the valueue passed to the function
        let newNode = new Node(value);

        // If there is no head property on the list, set the head and tail to be the newly created node
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            // Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
            this.tail.next = newNode;
            this.tail = newNode;
        }
        // Increment the length by 1
        this.length += 1;
        // Return the list
        return list;
    }

    // Example of how to traverse every node in the linked list, remember singly linked list is only one direction
    // Print every node in the linked list
    traverse(){
        let current = this. head;
        while(current){
            console.log(current)
            current = current.next; 
        }
    }
    

    // Removing a node from the end of the Linked List
    pop(){
       // If there are no nodes in the list, return undefined
       if(!this.head) return undefined;
       // Loop thru the list until you reach the tail
       let current = this.head;
       let newTail = current;
       while(current.next){
           newTail = current;
           current = current.next;
       }
       // Set the tail to be the 2nd to the last node
       this.tail = newTail;
       // Set the next property  of the 2nd to the last node to be null
       this.tail.next = null;
       // Decrement the length of the list by 1
       this.length -= 1;
       // If there's nothing left in the list, set head and tail to null
       if(this.length === 0){
           this.head = null;
           this.tail = null;
       }
       // Return the valueue of the node removed 
       return current;
    }

    // Removing a node from the beginning of the linked list
    shift(){
        // If there's no node, return undefined
        if(!this.head) return undefined;
        // Store the current head property in a variable 
        let currentHead = this.head;
        // Set the head property to be the current head's next property
        this.head = currentHead.next;
        // Decrement the length by 1
        this.length -= 1;
        // If there's no more node in the list, set tail to null(note: head is already equal to null from shift())
        if(this.length === 0){
            this.tail = null;
        }
        // Return the valueue of the node removed
        return currentHead;
    }

    // Add a new node to the beginning of the linked list
    unshift(value){
        // Create a new node using the valueue passed to the function
        let newNode = new Node(value)
        // If there is no head property, set the head and tail to be the newly created node, increment length by 1
        if(!this.head){
            this.head = newNode;
            this.tail = this.head; 
        } else {
            // Otherwise set the newly created node's next to be the current head property on the list
            newNode.next = this.head; 
            // Set the head property on the list to be that newly created node
            this.head = newNode; 
        }
        // Increment the length of the list by 1
        this.length += 1;
        // Return the linked list
        return this; 
    }

    // Retrieving a node by it's position in the linked list, function should accept an index
    get(index){
        // If the index is < 0 or >= length of the list, return null
        if(index < 0 || index >= list.length) return null;
        // Loop thru the list until you reach the index and return the node at that specific index 
        let counter = 0;
        let current = this.head; 
        while(counter !== index){
            current = current.next;
            counter += 1;
        }
        return current; 
    }

    // Changing the valueue of a node based on it's position in the Linked list. 
    // Function should accept a valueue and an index.
    set(index, value){
        // Use get function to find the specific node
        let nodeToSet = this.get(index);
        // If the node is found, set the valueue of that node to be the valueue passed to the function and return true
        if(nodeToSet){
            nodeToSet.value = value;
            return true;
        }  
        // If the node is not found, return false
        return false; 
    }

    // Adding a node to the linked list at a specific position
    // Function should accept a valueue and an index
    insert(index, value){
        // If index < 0 or > list length, return false
        if(index > this.length || index < 0) return false;

        // If index = list length, push a new node to the end of the list & return true
        if(index === this.length) return !!this.push(value);

        // If index = 0, unshift a new node to the beginning of the list & return true
        if(index === 0) return !!this.unshift(value);

        // Otherwise, using the get method, access the node at the index -1
        let foundNode = this.get(index);
        let newNode = new Node(value);
        let prevNext = foundNode.next;
         // Set the next property on the new node to be the previous next 
         newNode.next = prevNext; 
         // Set the next property on that node to be the new node
        foundNode.next = newNode;
       
        this.length += 1; 
        return true; 
    }

    // Removing a node from the linked list at a specific position
    remove(index){
        // If index < 0 or >= list length, return undefined
        if(index < 0 || index >= this.length) return undefined;

        // If index = 0, shift() from the beginning of the list
        if(index === 0) return this.shift();

        // If index = list.length -1, pop() from the back of the list
        if(index === this.length -1) return this.pop()

        // Otherwise, get the node by index
        let nodeToBeRemoved = this.get(index);
        // Set node's previous next to be node.next
        let previousNode = this.get(index - 1);
        previousNode.next = nodeToBeRemoved.next;
        // Decrement the length by 1
        this.length -= 1;
        // Return the value of the node removed
        return nodeToBeRemoved;
    }

    // Reversing the linked list in place
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node; 
        let prev = null;
        let next = null;

        for(let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next; 
        }
        return this;
    }

     // Helper method to console.log the order of the linked list
     print(){
        let arr = [];
        let current = this.head;
        while(current){
            arr.push(current.value);
            current = current.next; 
        }
        console.log(arr)
    }

}


let list = new SinglyLinkedList();
list.push(66)
list.push(90)
list.push(102)
list.push(305)
list.push(847)

console.log(list.print())
list.reverse()
console.log(list.print())