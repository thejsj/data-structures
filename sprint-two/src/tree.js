var makeTree = function (value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

/**
 * Time Complexity: Constant
 */
treeMethods.addChild = function (value) {
  this.children.push(makeTree(value));
};

/**
 * Time Complexity: Logrithmic because for loop does not go through all children all the time
 */
treeMethods.contains = function (target) { // string
  if (this.value === target) return true;
  // Go through all values in the array and check wether they're present
  for (var i = 0; i < this.children.length; i++) { //n
    var child = this.children[i];
    // If this is a tree...
    if (child.contains(target)) return true;
  }
  return false;
};

/**
 * Time Complexity: Linear
 */
var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};
