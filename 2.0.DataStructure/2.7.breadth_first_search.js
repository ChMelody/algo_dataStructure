// Binary Tree Traversal (NOT sorted)

// Breadth First Search (level by level, horizontally)
// Steps - iteratively using a queue

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTreeTraversal {
    constructor(){
        this.root = null;
    }

    // Breadth First Search - iteratively
    BFS(){
        // Store visited node
        let visited = [];
        // Node to be looked at
        let queue = [];  // first out <- [ ] <- first in
        // Starting at the root
        let node = this.root;
        // Add current node to queue from the back
        queue.push(node); 
        // If there is something in the queue, keep looping
        while(queue.length){   // [] is truthy, 0 is falsey
            // Node is now the first one out from dequeue
            node = queue.shift();
            // Put the same node to visited
            visited.push(node.value); 

            // Check the same node if it has left or right child
            // If it does, add left child to the queue to be worked on
            if(node.left) queue.push(node.left);

            // If it does, add the right child to the queue to be worked on
            if(node.right) queue.push(node.right);
        }
        // When done checking every node, return visited which keeps track of the order it was visited
        // This will return as a node, if you want just the value, store node.value instead.
        return visited; 
    }
}

//         10
//     8         5
//   99  3    40   60

// BFS -> [10,8,5,99,3,40,60]

let tree = new BinaryTreeTraversal()
let ten = new Node(10)
let eight = new Node(8);
let five = new Node(5);
let ninetynine = new Node(99);
let three = new Node(3);
let fourty = new Node(40);
let sixty = new Node(60);

tree.root = ten;
ten.left = eight;
ten.right = five;

eight.left = ninetynine;
eight.right = three;

five.left = fourty;
five.right = sixty;

console.log(tree.BFS())
