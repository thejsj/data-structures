var makeBinarySearchTree = function (value, isParent) {
  var tree = {};
  tree.value = value;
  tree.left = null;
  tree.right = null;
  tree.isParent = (isParent !== undefined ? isParent : true);
  tree.insert = function (value) {
    var insert = function (side, value) {
      if (tree[side] === null) {
        tree[side] = makeBinarySearchTree(value, false);
        if (tree.isParent) {
          tree.checkDepth();
        }
        return tree[side];
      } else {
        return tree[side].insert(value);
      }
    };
    if (value === tree.value) {
      return false;
    }
    if (value < tree.value) {
      return insert('left', value);
    } else {
      return insert('right', value);
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
  tree.getMaxDepth = function () {
    return Math.max.apply(null, tree._getAllDepths());
  };
  tree.getMinDepth = function () {
    return Math.min.apply(null, tree._getAllDepths());
  };
  tree._getAllDepths = function (result, level) {
    if (result === undefined) result = [];
    if (level === undefined) level = 1;
    return _.uniq(_.flatten([
      (tree.left !== null ?  tree.left._getAllDepths(result, level + 1) : level),
      (tree.right !== null ? tree.right._getAllDepths(result, level + 1) : level)
    ]));
  };
  tree.checkDepth = function () {
    console.log('checkDepth! : ', tree.isParent);
    var minDepth = tree.getMinDepth();
    var maxDepth = tree.getMaxDepth();
    if (maxDepth > (minDepth * 2)) {
      console.log('Rebalance!! : ', maxDepth, minDepth);
      tree._rebalanceSearchTree()
    } else {
      console.log('Dont Rebalance : ', maxDepth, minDepth);
      console.log(tree.value);
      console.log(tree._getAllDepths());
      console.log(tree._getAllValues());
    }
  };
  tree._getAllValues = function () {
    var values  = [];
    tree.breadthFirstLog(function(value) {
      values.push(value);
    });
    return values.sort();
  };
  tree._rebalanceSearchTree = function() {
    var results = [];
    tree.breadthFirstLog(function(value) {
      results.push(value);
    });
    results = results.sort();
    // Create new tree that will replace this tree
    // Recursively, insert values through finding middle, left, and aright of results
    var insertValuesRecursively = function insertValuesRecursively(array, tree) {
      // Find middle of array
      var middle_index = Math.floor(array.length / 2)
      var middle = array[middle_index];
      // Find left of array
      var left = array.slice(0, middle_index);
      // Find right of array
      var right = array.slice(middle_index + 1);
      // If tree is not defined, Create a new one
      if (tree === null) {
        var newTree = makeBinarySearchTree(middleValue);
      } else {
        tree.insert(middleValue);
      }
      // Check if left is an array and is not null
      if (left.length > 0) {
        insertValuesRecursively(left, newTree || tree);
      }
      // Check if righ is an array and is not null
      if (right.length > 0) {
        insertValuesRecursively(right, newTree || tree);
      }
      if (newTree !== undefined) return newTree;
    }
    var newTree =insertValuesRecursively(results, null);
    console.log('newTree');
    console.log(newTree);
    _.extend(tree, newTree);
  };
  return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
