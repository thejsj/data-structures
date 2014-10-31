var makeBinarySearchTree = function (value) {
  var tree = {};
  tree.value = value;
  tree.left = null;
  tree.right = null;
  tree.insert = function (value) {
    if (value === tree.value) {
      return false;
    }
    if (value < tree.value) {
      if (tree.left === null) {
        tree.left = makeBinarySearchTree(value);
        return tree.left;
      } else {
        return tree.left.insert(value);
      }
    } else {
      if (tree.right === null) {
        tree.right = makeBinarySearchTree(value);
        return tree.right;
      } else {
        return tree.right.insert(value);
      }
    }
  };
  tree.contains = function (value) {
    if (value === tree.value) {
      return true;
    }
    if (value < tree.value) {
      if (tree.left === null) {
        return false;
      } else {
        return tree.left.contains(value);
      }
    } else {
      if (tree.right === null) {
        return false;
      } else {
        return tree.right.contains(value);
      }
    }
  };
  tree.depthFirstLog = function (func) {
    func(tree.value);
    if (tree.left !== null) {
      tree.left.depthFirstLog(func);
    }
    if (tree.right !== null) {
      tree.right.depthFirstLog(func);
    }
  };
  return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */