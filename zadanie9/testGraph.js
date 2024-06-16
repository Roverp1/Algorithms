const { Graph } = require('./Graph.js');

const testGraph = new Graph(true, true); // Directed and weighted graph

const vertices = {};
['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].forEach(letter => {
  vertices[letter] = testGraph.addVertex(letter);
});

// Adding edges to create a connected graph with at least 10 nodes
testGraph.addEdge(vertices['A'], vertices['B'], 3);
testGraph.addEdge(vertices['A'], vertices['C'], 100);
testGraph.addEdge(vertices['A'], vertices['D'], 4);
testGraph.addEdge(vertices['B'], vertices['E'], 5);
testGraph.addEdge(vertices['B'], vertices['F'], 2);
testGraph.addEdge(vertices['C'], vertices['G'], 1);
testGraph.addEdge(vertices['D'], vertices['H'], 3);
testGraph.addEdge(vertices['E'], vertices['I'], 7);
testGraph.addEdge(vertices['F'], vertices['J'], 6);
testGraph.addEdge(vertices['G'], vertices['H'], 8);
testGraph.addEdge(vertices['H'], vertices['I'], 9);
testGraph.addEdge(vertices['I'], vertices['J'], 2);

module.exports = testGraph;
