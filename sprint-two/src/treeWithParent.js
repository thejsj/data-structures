var makeTreeWithParent = function (value, parent) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = parent || null;
  extend(newTree, treeWithParentMethods);
  return newTree;
};

var treeWithParentMethods = {};

treeWithParentMethods.addChild = function (value) {
  this.children.push(makeTreeWithParent(value, this));
};

treeWithParentMethods.contains = function (target) { // string
  if (this.value === target) return true;
  // Go through all values in the array and check wether they're present
  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i];
    // If this is a tree...
    if (child.contains(target)) return true;
  }
  return false;
};

treeWithParentMethods.removeChild = function (treeWithParent) {
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i] === treeWithParent) {
      this.children.splice(i, 1);
      return true;
    }
  }
  return false;
};

treeWithParentMethods.removeFromParent = function () {
  var remove_child = this.parent.removeChild(this);
  this.parent = null;
  return this;
};

var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
