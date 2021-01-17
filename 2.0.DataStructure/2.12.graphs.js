// In order to create an adjacency list, we have to creat an empty list first
// Add a vertex first before adding an edge
class Graph {
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []; 
        }
    }

    removeVertex(vertex){  // Remove a vertex as well as any relationships to other vertices
        while(this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex); 
        }
        delete this.adjacencyList[vertex];   // this will delete the vertex entirely, unless you want to keep the vertex with an empty array
    }

    addEdge(v1, v2){
        // You can add sanitation checks here
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1); 
    }

    removeEdge(vertex1, vertex2){  // remove v2 from v1, and remove v1 from v2
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }

    depthFirstRecursive(start){
        const visited = {};
        const result = [];
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex){
            if(!vertex) return;  // Base case
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor); 
                }
            })
        })(start); 
        // Above is same as define the function and then invoke it by callig dfs(); 

        return result; 
    }

    depthFirstIterative(start){
        const stack = [start]; // initialize the stack with the start; first in last out
        const visited = {}; 
        const result = [];
        let vertex; 

        visited[start] = true;
        
        while(stack.length){  // 0 is falsey
            // console.log(stack)
            vertex = stack.pop();
            result.push(vertex); 
            this.adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true; 
                    stack.push(neighbor); 
                }
            })
        }
        return result;
    }

    breadthFirst(start){
        const queue = [start]; // first in first out
        const result = [];
        const visited = {};
        let vertex;

        visited[start] = true;

        while(queue.length){
            vertex = queue.shift();
            result.push(vertex);
            this.adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
        return result; 
    }
}

//           A
//      /         \
//     B           C
//      \          /
//       D  ----  E
//        \      /
//            F

// adjacency list: {
//     "A" : ["B", "C"],
//     "B" : ["A", "D"],
//     "C" : ["A", "E"],
//     "D" : ["B", "E", "F"],
//     "E" : ["C", "D", "F"],
//     "F" : ["D", "E"]
// }

// let graph = new Graph();
// graph.addVertex('Houston')
// graph.addVertex('LA')
// graph.addVertex('New York')
// graph.addVertex('Alaska')

// graph.addEdge('Houston', 'LA')
// graph.addEdge('Houston', 'New York')
// graph.addEdge('Alaska', 'New York')
// graph.addEdge('Alaska', 'LA')

// graph.removeEdge('Houston', 'LA')
// graph.removeVertex('Alaska')
// console.log(graph);


let g = new Graph();
g.addVertex("A");
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")


console.log(g.depthFirstRecursive("A"));  // ["A","B","C","D","E","F"]
console.log(g.depthFirstIterative("A"));  // ["A","C","E","F","D","B"]
console.log(g.breadthFirst("A"))  // ["A","B","C","D","E","F"]