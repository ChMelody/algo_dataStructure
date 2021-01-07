// Priority Queue
// A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities.
// It is an abstract concept, seperate from heap, commonly done using heap to store and prioritize (much more efficient that using list/array)
// Also, usually a lower number is higher priority so using MinHeap is probably better since the root is the smallest number (compare to its two children)


class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

// MinBinaryHeap, now compare priority level instead of its value
class PriorityQueue {
    constructor(){
        this.values = [];
    }

    enqueue(val, priority){
        let newNode = new Node(val, priority);
        // Push the values into the values property on the heap
        this.values.push(newNode);
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
            // If parent is smaller, no need to swap
            if(parent.priority <= element.priority) break;
            // Otherwise, swap the values at the position
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            // Also need to update idx to be the parentIdx, and start over
            idx = parentIdx;
        }
    }

    // Removing from a heap (please refer back to above) - opposite to insert/bubbleUp
    dequeue(){
        // Remove the first element (root) from the values property and replace with the most recently added (the last element)
        const min = this.values[0];
        const end = this.values.pop();

        // EDGE CASE: if this.value only had 1 element, which already pop(), the job is done here, only need to return what was removed
        
        // Only run this if there are elements in this.values to work with
        if(this.values.length > 0){
            this.values[0] = end;
            // Down-heap to find the correct spot for the 'new' root
            this.downHeap();
        }
        // Return what was removed
        return min;
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
                if(leftChild.priority < element.priority) swap = leftIdx;
            }

            if(rightIdx < length){
                rightChild = this.values[rightIdx];
                if((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)) {
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

let Todo = new PriorityQueue()
Todo.enqueue('Math', 2);
Todo.enqueue('Tennis', 5);
Todo.enqueue('English', 1);
Todo.enqueue('Music', 3);
Todo.enqueue('Essay', 4);
console.log('Dequeued --->', Todo.dequeue(), '<---');

console.log(Todo)