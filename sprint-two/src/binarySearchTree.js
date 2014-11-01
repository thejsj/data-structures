var makeBinarySearchTree = function (value, parent, rebalanceTree) {
  var tree = {};
  tree.value = value;
  tree.left = null;
  tree.right = null;
  tree.parent = parent || null;
  tree.rebalanceTree = (rebalanceTree ? true : false);
  /**
   * Time Complexity: Logarithmic
   * - checkDepth involves a linear operation
   */
  tree.insert = function (value, checkDepth) {
    var insert = function (side, value, checkDepth) {
      if (tree[side] === null) {
        tree[side] = makeBinarySearchTree(value, tree);
        if (checkDepth !== false) {
          tree.checkDepth();
        }
        return tree[side];
      } else {
        return tree[side].insert(value, checkDepth);
      }
    };
    if (value === tree.value) {
      return false;
    }
    if (value < tree.value) {
      return insert('left', value, checkDepth);
    } else {
      return insert('right', value, checkDepth);
    }

  };
  /**
   * Time Complexity: Logarithmic
   */
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
  /**
   * Time Complexity: Linear
   */
  tree.depthFirstLog = function (func) {
    func(tree.value);
    if (tree.left !== null) {
      tree.left.depthFirstLog(func);
    }
    if (tree.right !== null) {
      tree.right.depthFirstLog(func);
    }
  };
  /**
   * Time Complexity: Linear
   */
  tree.breadthFirstLog = function (func, first) {
    if (first !== false) {
      func(tree.value);
    }
    if (tree.left !== null) func(tree.left.value);
    if (tree.right !== null) func(tree.right.value);
    if (tree.left !== null) {
      tree.left.breadthFirstLog(func, false);
    }
    if (tree.right !== null) {
      tree.right.breadthFirstLog(func, false);
    }
  };
  /**
   * Time Complexity: Linear (through _getAllDepths)
   */
  tree.getMaxDepth = function (allDepths) {
    var allDepths = allDepths || tree._getAllDepths();
    return Math.max.apply(null, allDepths);
  };
  /**
   * Time Complexity: Linear (through _getAllDepths)
   */
  tree.getMinDepth = function (allDepths) {
    var allDepths = allDepths || tree._getAllDepths();
    return Math.min.apply(null, allDepths);
  };
  /**
   * Time Complexity: Linear
   */
  tree._getAllDepths = function (result, level) {
    if (result === undefined) result = [];
    if (level === undefined) level = 1;
    return _.unique(_.flatten([
      (tree.left !== null ?  tree.left._getAllDepths(result, level + 1) : level),
      (tree.right !== null ? tree.right._getAllDepths(result, level + 1) : level)
    ]));
  };
  /**
   * Time Complexity: Linear (through _getAllDepths)
   */
  tree.checkDepth = function () {
    if (tree.parent) return tree.parent.checkDepth();
    if (tree.rebalanceTree) {
      var allDepths = tree._getAllDepths();
      var minDepth = tree.getMinDepth(allDepths);
      var maxDepth = tree.getMaxDepth(allDepths);
      if (maxDepth > (minDepth * 2)) {
        tree._rebalanceSearchTree();
      }
    }
  };
  /**
   * Time Complexity: Linear (through breadthFirstLog)
   */
  tree._getAllValues = function () {
    var values  = [];
    tree.breadthFirstLog(function(value) {
      values.push(value);
    });
    return values.sort(function(a, b){ return a - b; });
  };
  /**
   * Time Complexity : Linear (loops through values twice)
   */
  tree._rebalanceSearchTree = function() {
    var results = tree._getAllValues();
    var insertValuesRecursively = function insertValuesRecursively(array, parent) {
      var middle_index = Math.floor(array.length / 2);
      var middle = array[middle_index];
      var left = array.slice(0, middle_index);
      var right = array.slice(middle_index + 1);
      if (tree.value === null) {
        tree.value = middle;
        tree.parent = null;
      } else {
        var newNode = tree.insert(middle, false);
      }
      if (left.length > 0) {
        insertValuesRecursively(left, (newNode ? newNode : null));
      }
      if (right.length > 0) {
        insertValuesRecursively(right, (newNode ? newNode : null));
      }
    }
    tree.value = null;
    tree.left = null;
    tree.right = null;
    tree.parent = null;
    insertValuesRecursively(results, tree, null);
  };
  return tree;
};
