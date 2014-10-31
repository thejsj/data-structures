var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(newNodeKey, toNodeKey) {
  this.nodes[newNodeKey] = (new Node(newNodeKey));
  if (toNodeKey !== undefined && this.nodes[toNodeKey]) {
    this.addEdge(newNodeKey, toNodeKey);
  }
  var keys = Object.keys(this.nodes);
  if (keys.length === 2) {
    this.addEdge(keys[0], keys[1]);
  }
};

Graph.prototype.contains = function(nodeKey){
  if (this.nodes[nodeKey]) return true;
  return false;
};

Graph.prototype.removeNode = function(nodeKey){
  delete this.nodes[nodeKey];
};

Graph.prototype.getEdge = function(fromNodeKey, toNodeKey){
  if (!(fromNodeKey in this.nodes) && !(toNodeKey in this.nodes)) {
    return false;
  }
  var fromNode = this.nodes[fromNodeKey];
  var toNode = this.nodes[toNodeKey];
  return (fromNode.hasEdge(toNode) && toNode.hasEdge(fromNode));
};

Graph.prototype.addEdge = function(fromNodeKey, toNodeKey){
  var fromNode = this.nodes[fromNodeKey];
  var toNode = this.nodes[toNodeKey];
  fromNode.addEdge(toNode);
  toNode.addEdge(fromNode);
};

Graph.prototype.removeEdge = function(fromNodeKey, toNodeKey){
  var fromNode = this.nodes[fromNodeKey];
  var toNode = this.nodes[toNodeKey];
  fromNode.removeEdge(toNode);
  toNode.removeEdge(fromNode);
  if (fromNode.hasEdges()) delete this.nodes[fromNodeKey];
  if (toNode.hasEdges()) delete this.nodes[toNodeKey];
  return true;
};


var Node = function (value) {
  this.value = value;
  this.edges = [];
  this.addEdge = function (node) {
    if (!this.hasEdge(node)) {
      this.edges.push(node.value);
    }
  }
  this.hasEdge = function (node) {
    for (var i = 0; i < this.edges.length; i++) {
      if (this.edges[i] === node.value) {
        return true;
      }
    }
    return false;
  }
  this.hasEdges = function () {
    return this.edges.length > 0;
  }
  this.removeEdge = function (node) {
    for (var i = 0; i < this.edges.length; i++) {
      if (this.edges[i] === node.value) {
        this.edges.slice(i, 1);
      }
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
