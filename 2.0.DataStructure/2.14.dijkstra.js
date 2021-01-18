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
        const previous = {};  // {A: null, B: null, C: null,...}
        let smallest; 

        // Build up initial state, this is what the adjacencyList looks like: 
        // {
        //     A: [ { node: 'B', weight: 4 }, { node: 'C', weight: 2 } ],
        //     B: [ { node: 'A', weight: 4 }, { node: 'E', weight: 3 } ],
        //     C: [
        //       { node: 'A', weight: 2 },
        //       { node: 'D', weight: 2 },
        //       { node: 'F', weight: 4 }
        //     ],
        //     D: [
        //       { node: 'C', weight: 2 },
        //       { node: 'E', weight: 3 },
        //       { node: 'F', weight: 1 }
        //     ],
        //     E: [
        //       { node: 'B', weight: 3 },
        //       { node: 'D', weight: 3 },
        //       { node: 'F', weight: 1 }
        //     ],
        //     F: [
        //       { node: 'C', weight: 4 },
        //       { node: 'D', weight: 1 },
        //       { node: 'E', weight: 1 }
        //     ]
        //   }
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity; 
                nodes.enqueue(vertex, Infinity); 
            }
            previous[vertex] = null; 
        }

        // This is what nodes:
        //  {values: [
        //       { val: 'A', priority: 0 },
        //       { val: 'B', priority: Infinity },
        //       { val: 'C', priority: Infinity },
        //       { val: 'D', priority: Infinity },
        //       { val: 'E', priority: Infinity },
        //       { val: 'F', priority: Infinity }
        //   ]}
          
        // as long as there is somethin to visit
        while(nodes.values.length){
            //  current node = A: [ { node: 'B', weight: 4 }, { node: 'C', weight: 2 } ]
            smallest = nodes.dequeue().val;    // "A", nodes.dequeue() will return the entire object, but we only need the value
            if(smallest === finish) {
                console.log('distances', distances);
                console.log('prev', previous)
                // WE ARE DONE
                // Build up the path to return at end
            }

            // Loop all of its neighbors
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor of this.adjacencyList[smallest]){
                    // this.adjacencyList['A'] = { node: 'B', weight: 4 }, { node: 'C', weight: 2 } ]
                    let tempWeight = distances[smallest] + neighbor.weight; // 0 + 4
                    let neighborNode = neighbor.node; // 'B'
               
                    //                 distances['B']
                    if(candidate < distances[neighborNode]){   // 4
                        distances[neighborNode] = tempWeight; 
                        previous[neighborNode] = smallest;
                        nodes.enqueue(neighborNode, tempWeight); 
                    }
                }
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

// console.log(graph.adjacencyList);  
graph.Dijkstra("A", "E"); 



// let q = new PriorityQueue();
// q.enqueue("D", 30);
// q.enqueue("B", 7);
// q.enqueue("C", 25);
// q.enqueue("Q", 1.5);

// q.dequeue(); // Will dequeue the first item from queue which also is the smallest priority

// console.log(q); 