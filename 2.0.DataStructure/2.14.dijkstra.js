// Dijkstra's Algorithm
// It works upon graphs, and uses Priority Queue & Heaps to search
// Structure: 
    // Previous object: use path as key, distance as value. Stores where it came from, replace if a shorter path found; 
    // Visited: make sure to only visit once


// Dijkstra's with Priority Queue; to optimize, use Binary Heaps
class PriorityQueue{
    constructor(){
        this.values = [];
    }

    enqueue(val, priority){
        this.values.push({val, priority}); 
        this.sort();  // Sorted, in this case, sort from smallest to largest
    }

    dequeue(){  // Remove the smallest priority from the queue
        return this.values.shift();
    }

    sort(){    // This sorting method is O(n * log n)
        this.values.sort((a,b) => a.priority - b.priority);
    }
}

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
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {}; 

        // Build up initial state
        for(let vertex of this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
            } else {
                distances[vertex] = Infinity; 
            }
        }
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

console.log(graph.adjacencyList);  

let q = new PriorityQueue();
q.enqueue("D", 30);
q.enqueue("B", 7);
q.enqueue("C", 25);
q.enqueue("Q", 1.5);

// q.dequeue(); // Will dequeue the first item from queue which also is the smallest priority

// console.log(q); 