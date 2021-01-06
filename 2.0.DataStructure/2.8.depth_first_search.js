// Binary Tree Traversal (NOT sorted)

// Depth First Search: 
//         10                           10
//     8         5                  8         5
//   99  3    40   60           99     3         60

// Pre-order: [10, 8,99,3, 5,40,60] (root)node first 
//             [10, 8,99,3, 5,60] 
// Post-order: [99,3,8, 40,60,5, 10] (root)node last 
//              [99,3,8, 60,5, 10]
// In-order: [99,8,3, 10, 40,5,60] entire left then (root)node then entire right 
//            [99,8,3, 10, 5,60]


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

    // Depth First Search PreOrder - recursively
    DFSPreOrder(){
        // Create a variable to store visited node's value (or the node itself)
        let visited = [];

        // Write a helper function which accept a node
        function traverse(node){
            // Push the value of the node to the visited
            visited.push(node.value)
            // If the node has left child, call the helper function on that leftchild node
            if(node.left) traverse(node.left)
            // If the node has right child, call the helper function on that rightchild node
            if(node.right) traverse(node.right)
        }

        // Initiate/ invoke the helper function with the root node
        traverse(this.root)
        // Return the visited values
        return visited;
    }

    // DFS PostOrder - recursively
    DFSPostOrder(){
        let visited = [];

        function traverse(node){
            // If the node has leftchild, call the helper function on the leftchild until we find the furthest leftchild
            if(node.left) traverse(node.left);
            // If the node has rightchild, call the helper function on the rightchild until we find the furthest rightchild
            if(node.right) traverse(node.right);
            // Push the value of the node to visited
            visited.push(node.value);
        }

        // Initiate/ invoke the helper function with the root node
        traverse(this.root)
        // Return visited
        return visited; 
    }

    // DFS InOrder - 
    DFSInOrder(){
        let visited = [];

        function traverse(node){
            // If node has left, traverse the entire left until we find the furthest leftchild
            if(node.left) traverse(node.left);

            visited.push(node.value)

            // If node has right, traverse the entire right until we find the furthest rightchild
            if(node.right) traverse(node.right);
        }
        // Initiate the helper function with root node
        traverse(this.root);

        return visited; 
    }
    
}

//         10
//     8         5
//   99  3    40   60

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

console.log(tree.DFSPreOrder())   // [10,8,99,3,5,40,60]
console.log(tree.DFSPostOrder())  // [99,3,8,40,60,5,10]
console.log(tree.DFSInOrder())    // [99,8,3,10,40,5,60]