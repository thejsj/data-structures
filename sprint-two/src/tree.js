var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){ // string
  if (this.value === target) return true;
  // Go through all values in the array and check wether they're present
  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i];
    // If this is a tree...
    if (child.contains(target)) return true;
  }
  return false;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
