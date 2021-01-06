// Binary Search Tree (BST)
// Time complexity(best & average case): insertion O(log n) -> log base 2 of n, search O(log n)
// Worse case: If we have a completely one-sided tree, insertion O(n), search O(n)

// Every parent node has at most TWO children
// Every node to the left of a parent node is ALWAYS less than the parent
// Every node to the right of a parent node is ALWAYS greater than the parent


class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    // Inserting a node, iteratively or recursively
    insert(value){
        // Create a new Node
        let newNode = new Node(value);
        // Starting at the root, check if there is a root
        // if no root - the root now becomes that new node
        if(this.root === null){
            this.root = newNode; 
            return this;
        } else {
            // If there is a root, save current root as a variable
            let current = this.root;
            // Check if the value of the new node is greater than or less than the value of the root
            while(true){
                if(value === current.value) return undefined;
                if(value < current.value){
                    // Check to see if there is a node to the left
                    if(current.left === null) {
                        // If there isn't, add that node as the left property
                        current.left = newNode;
                        return this;
                    } else {
                        // If there is, move to that node and repeat these steps
                        current = current.left; 
                    }
                } else {
                    // If it is greater, check to see if there is a node to the right
                    if(current.right === null) {
                        // If there isn't, add that node as the right property
                        current.right = newNode;
                        return this;
                    } else {
                        // If there is, move to that node and repeat these steps
                        current = current.right;
                    }
                } 
            }
        } 
    }

    find(value){
        if(this.root === null) return false;

        let current = this.root;
        let found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left
            } else if (value > current.value) {
                current = current.right
            } else {
                found = true;
            }
        }
        // If found, return the node
        if(found){
            return current; 
        } else return found;
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(2);
tree.insert(7);
tree.insert(11);
tree.insert(16);

console.log(tree.find(110)) // false