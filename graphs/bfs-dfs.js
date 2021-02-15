const Node = require('./node');

class Graph {
  constructor(size) {
    this.nodes = [];
    this.graph = {};
    for (let index = 0; index < size; index++) {
      const element = new Node(index);
      this.nodes.push(element);
    }
  }

  addEdge = (start, end) => {
    if (this.graph[start]) {
      this.graph[start].push(this.nodes[end]);
    } else {
      this.graph[start] = [];
      this.graph[start].push(this.nodes[end]);
    }
  };

  bfs = () => {
    this.graph[1][0].visited = true;
    const queue = [this.graph[1][0]];

    while (queue.length != 0) {
      const node = queue.shift();
      this.graph[node.value].forEach((element) => {
        if (!element.visited) {
          element.parent = node.value;
          element.visited = true;
          queue.push(element);
        }
      });
      console.log(node);
    }
  };

  dfs = () => {
    this.graph[1][0].visited = true;
    const stack = [this.graph[1][0]];
    while (stack.length != 0) {
      const node = stack.pop();
      this.graph[node.value].forEach((element) => {
        if (!element.visited) {
          element.parent = node.value;
          element.visited = true;
          stack.push(element);
        }
      });
      console.log(node);
    }
  };
}

const g = new Graph(7);
g.addEdge(0, 1);
g.addEdge(0, 3);

g.addEdge(1, 0);
g.addEdge(1, 2);
g.addEdge(1, 3);
g.addEdge(1, 5);
g.addEdge(1, 6);

g.addEdge(2, 1);
g.addEdge(2, 3);
g.addEdge(2, 4);
g.addEdge(2, 5);

g.addEdge(3, 0);
g.addEdge(3, 1);
g.addEdge(3, 2);
g.addEdge(3, 4);

g.addEdge(4, 2);
g.addEdge(4, 3);
g.addEdge(4, 6);

g.addEdge(5, 1);
g.addEdge(5, 2);

g.addEdge(6, 1);
g.addEdge(6, 4);

g.dfs();
