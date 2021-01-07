// Heaps: a type of tree

// Binary Heap: very similar to a binary search tree, BUT with some different rules
// MaxBinaryHeap: parent nodes are always LARGER than child nodes, but no guarantees between sibling nodes. A binary heap is as compact as possible. All the children of each node are as full as they can be (each parent has two children) and LEFT children are filled out first.
// MinBinaryHeap: parent nodes are alwast SMALLER than child node, but no guarantees between sibling nodes. A binary heap is as compact as possible. All the children of each node are as full as they can be (each parent has two children) and LEFT children are filled out first.

// Binary Heaps time complexity (best & average & worse case): insertion O(log n) , removal O(log n), search O(n)
// Heap is not optimal for searching, because there are no relationships between siblings , so there's no guarantee where the target value might be at (left or right) at each level

// Why do we need to know this?
// Binary Heaps are very useful data structures for sorting, and implementing other data structures like Priority Queues (very commonly used)
// Binary Heaps are also used quite a bit, with graph traversal algorithms

// An easy way of storing a Binary Heap: A list / Array 
// If a binary heap was stored in an array, to find its children, for any index of an array n, the LEFT child is stored at 2n+1, the RIGHT child is stored at 2n+2. To find its parent, Math.floor(n-1)/2. 

// Removing from a heap means to REMOVES the ROOT and REPLACE with the MOST RECENTLY added and ADJUST (sink-down/ down-heap)
// The procedure for deleting the root from the heap (effectively extracting the max element in a max-heap or the min element in a min-heap) and restoring the properties is called down-heap
// (aka bubble-down, percolate-down, sift-down, trickle down, heapify-down, cascade-down, and extract-min/max)



class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }

    insert(element){
        // Push the values into the values property on the heap
        this.values.push(element);
        // Bubble up, to make sure element is at the right position
        this.bubbleUp();
    }

    bubbleUp(){
        // Create a variable called index which is the length of the values property -1
        let idx = this.values.length - 1;
        const element = this.values[idx];
       
        // Keep looping as long as the values element at the parentIndex is less than the values element at the child index
        while(idx > 0){
             // Create a variable called parentIndex - Math.floor(index-1)/2 
            let parentIdx = Math.floor((idx-1)/2)
            let parent = this.values[parentIdx];
            // If parent is larger, no need to swap
            if(parent >= element) break;
            // Otherwise, swap the values at the position
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            // Also need to update idx to be the parentIdx, and start over
            idx = parentIdx;
        }
    }

    // Removing (also called extractMax) from a heap (please refer back to above) - opposite to insert/bubbleUp
    extractMax(){
        // Remove the first element (root) from the values property and replace with the most recently added (the last element)
        const max = this.values[0];
        const end = this.values.pop();

        // EDGE CASE: if this.value only had 1 element, which already pop(), the job is done here, only need to return what was removed
        
        // Only run this if there are elements in this.values to work with
        if(this.values.length > 0){
            this.values[0] = end;
            // Down-heap to find the correct spot for the 'new' root
            this.downHeap();
        }
        // Return what was removed
        return max;
    }

    downHeap(){
        let idx = 0;
        const element = this.values[0];
        const length = this.values.length;
        // Compare element('new' root) to its two children
        while(true){
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let rightChild, leftChild;
            let swap = null;

            if(leftIdx < length){
                leftChild = this.values[leftIdx];
                if(leftChild > element) swap = leftIdx;
            }

            if(rightIdx < length){
                rightChild = this.values[rightIdx];
                if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
                    swap = rightIdx;
                }
            }
            
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }

}

let heap = new MaxBinaryHeap()

//           40
//     30         23
//  19   10     21

console.log(heap.insert(30), heap)  // { values: [ 30 ] }
console.log(heap.insert(19), heap)  // { values: [ 30, 19 ] }
console.log(heap.insert(23), heap)  // { values: [ 30, 19, 23 ] }
console.log(heap.insert(40), heap)  // { values: [ 40, 30, 23, 19 ] }
console.log(heap.insert(10), heap)  // { values: [ 40, 30, 23, 19, 10 ] }
console.log(heap.insert(2), heap)  // { values: [ 40, 30, 23, 19, 10, 21 ] }
console.log(heap.extractMax(), heap)  // { values: [ 40, 30, 23, 19, 10, 21 ] }
