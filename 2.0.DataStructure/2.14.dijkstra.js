// Dijkstra's Algorithm
// It works upon graphs, and uses Priority Queue & Heaps to search
// Structure: 
    // previousFrom object: use path as key, distance as value. Stores where it came from, replace if a shorter path found; 
    // Visited: make sure to only visit once


// Dijkstra's with Priority Queue; naive solution uses sort method, optimal uses MinHeap
class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2, weight){
        this.adjacencyList[vertex1].push({node: vertex2, weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight});
    }

    Dijkstra(start, finish){
        const nodesQueue = new PriorityQueue();  // {queue: []}
        const distanceTo = {};  // {A:0, B: Infinity, C:Infinity,...}
        const previousFrom = {};  // {A:null, B:null, C:null,...}
        let current; 
        let path = [];

        // This is what this.adjacencyList looks like: 
        // {
        //     A: [ { node: 'B', weight: 4 }, { node: 'C', weight: 2 } ],
        //     B: [ { node: 'A', weight: 4 }, { node: 'E', weight: 3 } ],
        //     C: [{ node: 'A', weight: 2 },{ node: 'D', weight: 2 },{ node: 'F', weight: 4 }],
        //     D: [{ node: 'C', weight: 2 },{ node: 'E', weight: 3 },{ node: 'F', weight: 1 }],
        //     E: [{ node: 'B', weight: 3 },{ node: 'D', weight: 3 },{ node: 'F', weight: 1 }],
        //     F: [{ node: 'C', weight: 4 },{ node: 'D', weight: 1 },{ node: 'E', weight: 1 }]
        //   }

        // Initialize queue with the vertex and its weight
        // Initialize distanceTo{}, set starting to 0 and everythin else to Infinity
        // Initialize previousFrom{}, vertex's prev to null
        for(let vertex in this.adjacencyList){  // A,B,C,D,E,F
            if(vertex === start){
                distanceTo[vertex] = 0;
                nodesQueue.enqueue(vertex, 0);
            } else {
                distanceTo[vertex] = Infinity; 
                nodesQueue.enqueue(vertex, Infinity); 
            }
            previousFrom[vertex] = null; 
        }

        // console.log(nodesQueue)
        // {queue: [
        //       { val: 'A', priority: 0 },
        //       { val: 'B', priority: Infinity },
        //       { val: 'C', priority: Infinity },
        //       { val: 'D', priority: Infinity },
        //       { val: 'E', priority: Infinity },
        //       { val: 'F', priority: Infinity }
        // ]}

        // As long as there is something in the queue waiting to be visited
        while(nodesQueue.queue.length){
            current = nodesQueue.dequeue().val;    // "A", nodesQueue.dequeue() will return the entire object, but we only need the value
            if(current === finish) {
                // WE ARE DONE
                // Build up the path to return at end
                while(previousFrom[current]){
                    path.push(current)
                    current = previousFrom[current]; 
                }
                break;
            }

            // Loop through all of current's neighbors 
            if(current || distanceTo[current] !== Infinity){
                for(let neighbor of this.adjacencyList[current]){  // { node: 'B', weight: 4 }, { node: 'C', weight: 2 }
                    let tempWeight = distanceTo[current] + neighbor.weight; // A + B = 0 + 4 | A + C = 0 + 2
                    let neighborNode = neighbor.node; // 'B' | 'C'
               
                    if(tempWeight < distanceTo[neighborNode]){   // B: 4 < Infinity ? | C: 2 < Infinity ?
                        distanceTo[neighborNode] = tempWeight;  // replace with the smaller number
                        previousFrom[neighborNode] = current;  // update route to get to B | C
                        nodesQueue.enqueue(neighborNode, tempWeight);  // push the neighborNode to the queue, but enqueue() will also sort the queue based on priority
                    }
                }
            }
        }
        return path.concat(start).reverse(); 
    }
}


class PriorityQueue{
    constructor(){
        this.queue = [];
    }

    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.queue.push(newNode); 
        // this.sort();  // Naive, instead we use heap
        this.bubbleUp();  // Optimized with heap
    }

    bubbleUp(){
        let idx = this.queue.length - 1;
        const element = this.queue[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/ 2);
            let parent = this.queue[parentIdx]; 
            if(element.priority >= parent.priority) break;
            this.queue[parentIdx] = element;
            this.queue[idx] = parent;
            idx = parentIdx; 
        }
    }

    dequeue(){  // Remove the current priority from the queue
        // return this.queue.shift();  // naive
        const min = this.queue[0];
        const end = this.queue.pop();
        if(this.queue.length > 0){
            this.queue[0] = end;
            this.sinkDown();
        }
        return min; 
    }

    sinkDown(){
        let idx = 0;
        const length = this.queue.length;
        const element = this.queue[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            
            if(leftChildIdx < length) {
                leftChild = this.queue[leftChildIdx]; 
                if(leftChild.priority < element.priority){
                    swap = leftChildIdx; 
                }
            }
            if(rightChildIdx < length){
                rightChild = this.queue[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx; 
                }
            }
            if(swap === null) break;

            this.queue[idx] = this.queue[swap];
            this.queue[swap] = element;
            idx = swap;
        }
    }
    // sort(){    // Naive. This sorting method is O(n * log n)
    //     this.queue.sort((a,b) => a.priority - b.priority);
    // }
}

class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}


let graph = new WeightedGraph();
//         A -4- B
//       2/        \3
//      C -2- D -3- E
//       4\  /1   /1
//          F      
// Find the shortest path from A to E

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

// console.log(graph.adjacencyList);  
graph.Dijkstra("A", "E");  // ['A','C','D','F','E']



// let q = new PriorityQueue();
// q.enqueue("D", 30);
// q.enqueue("B", 7);
// q.enqueue("C", 25);
// q.enqueue("Q", 1.5);

// q.dequeue(); // Will dequeue the first item from queue which also is the current priority

// console.log(q); 