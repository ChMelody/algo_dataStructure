// Dijkstra's Algorithm
// It works upon graphs, and uses priority queue & heaps to search
// Implement a Weighted graph

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
}

//         A -4- B
//       2/        \3
//      C -2- D -3- E
//       4\  /1   /1
//          F      
// Find the shortest path from A to E

let graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B", 9);
graph.addEdge("A", "C", 5);
graph.addEdge("B", "C", 7);


console.log("A: ", graph.adjacencyList["A"]);
console.log("B: ", graph.adjacencyList["B"]);
console.log("C: ", graph.adjacencyList["C"]);