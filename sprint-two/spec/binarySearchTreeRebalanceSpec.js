describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree(5);
  });

  it('should get the correct depth for a tree', function () {
    expect(binarySearchTree._getAllDepths()).to.be.eql([1]);
    binarySearchTree.insert(4);
    binarySearchTree.insert(6);
    expect(binarySearchTree._getAllDepths()).to.eql([2]);
    binarySearchTree.insert(7);
    expect(binarySearchTree._getAllDepths()).to.eql([2, 3]);
  });

  it('should get the correct max depth for a tree', function () {
    binarySearchTree.insert(4);
    binarySearchTree.insert(6);
    binarySearchTree.insert(7);
    binarySearchTree.insert(8);
    binarySearchTree.insert(9);
    expect(binarySearchTree.getMaxDepth()).to.equal(5);
  });

  it('should get the correct min depth for a tree', function () {
    binarySearchTree.insert(4);
    binarySearchTree.insert(6);
    binarySearchTree.insert(7);
    binarySearchTree.insert(8);
    binarySearchTree.insert(9);
    expect(binarySearchTree.getMinDepth()).to.equal(2);
  });

  it('should get the correct min depth for a tree', function () {
    console.clear();
    console.log('*******');
    binarySearchTree.insert(6);
    binarySearchTree.insert(7);
    binarySearchTree.insert(8); // new top value
    binarySearchTree.insert(9);
    binarySearchTree.insert(10);
    binarySearchTree.insert(11);
    console.log(' %%%%%%% ')
    expect(binarySearchTree.getMinDepth()).to.equal(3);
    expect(binarySearchTree.getMaxDepth()).to.equal(3);
  });
});
