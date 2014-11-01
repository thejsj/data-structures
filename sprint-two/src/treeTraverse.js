var makeTreeWithTraverse = function (value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  extend(newTree, treeMethods);
  extend(newTree, treeWithTraverseMethods);
  return newTree;
};

var treeWithTraverseMethods = {};

treeWithTraverseMethods.addChild = function (value) {
  this.children.push(makeTreeWithTraverse(value));
};


treeWithTraverseMethods.traverse = function (func) {
  this.value = func(this.value);
  for (var i = 0; i < this.children.length; i++) {
    this.children[i].traverse(func);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
