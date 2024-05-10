// Number of vertices in the graph
let numVertices = 10;

// Function to find the vertex with minimum distance value
function getMinDistanceVertex(distances, shortestPathTree) {
    let minDistance = Number.MAX_VALUE, minDistanceVertex = -1;
    for(let vertex = 0; vertex < numVertices; vertex++)
        if (shortestPathTree[vertex] == false && distances[vertex] <= minDistance) 
            minDistance = distances[vertex], minDistanceVertex = vertex;
    return minDistanceVertex;
}

// Function to print the shortest path
function getShortestPath(parent, j) {
    if (parent[j] == -1)
        return [j];
    return [...getShortestPath(parent, parent[j]), j];
}

// Dijkstra's single source shortest path algorithm for a graph
function dijkstra(graph, sourceVertex, destinationVertex) {
    let distances = Array(numVertices).fill(Number.MAX_VALUE);
    let shortestPathTree = Array(numVertices).fill(false);
    let parent = Array(numVertices).fill(-1);
    
    distances[sourceVertex] = 0; // Distance of source vertex from itself is always 0
    
    for(let count = 0; count < numVertices - 1; count++) {
        let u = getMinDistanceVertex(distances, shortestPathTree);
        shortestPathTree[u] = true; // Mark the picked vertex as processed
        
        for(let v = 0; v < numVertices; v++)
            if (!shortestPathTree[v] && graph[u][v] != 0 && distances[u] != Number.MAX_VALUE && distances[u] + graph[u][v] < distances[v]) {
                parent[v] = u;
                distances[v] = distances[u] + graph[u][v];
            }
    }
    let path = getShortestPath(parent, destinationVertex);
    console.log(`Shortest path from node ${sourceVertex} to node ${destinationVertex} is ${path}, path weights ${distances[destinationVertex]}`);
}

// Driver code
let graph = [ 
    [ 0, 4, 0, 0, 0, 0, 0, 8, 0, 0 ],
    [ 4, 0, 8, 0, 0, 0, 0, 11, 0, 0 ],
    [ 0, 8, 0, 7, 0, 4, 0, 0, 2, 0 ],
    [ 0, 0, 7, 0, 9, 14, 0, 0, 0, 0],
    [ 0, 0, 0, 9, 0, 10, 0, 0, 0, 0 ],
    [ 0, 0, 4, 14, 10, 0, 2, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 2, 0, 1, 6, 0 ],
    [ 8, 11, 0, 0, 0, 0, 1, 0, 7, 0 ],
    [ 0, 0, 2, 0, 0, 0, 6, 7, 0, 0 ],
    [ 10, 3, 0, 3, 0, 2, 0, 5, 0, 0 ] 
];
dijkstra(graph, 0, 5);
