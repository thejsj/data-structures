describe('treeWithParent', function() {
  var tree;

  beforeEach(function() {
    tree = makeTreeWithParent();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function(){
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function(){
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.children[1].addChild(9);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should have a parent attribute', function(){
    tree.addChild(5);
    expect(tree.children[0].parent.value).to.equal(tree.value);
  });

  it('should handle nested parent-child relationships', function(){
    tree.addChild(5);
    tree.children[0].addChild(7);
    expect(tree.children[0].children[0].parent.parent.value).to.equal(tree.value);
  });

  it('should handle remove from parent function', function () {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[0].addChild(8);
    tree.children[1].addChild(1);
    tree.children[1].addChild(797);
    var tree2 = tree.children[1].removeFromParent();
    expect(tree2.parent).to.equal(null);
    expect(tree.children.length).to.equal(1);
    expect(tree.contains(797)).to.equal(false);
    expect(tree2.contains(797)).to.equal(true);
  });
});
