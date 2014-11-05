describe('treeTraverse', function() {
  var tree;

  beforeEach(function() {
    tree = makeTreeWithTraverse();
  });

  it('should correctly implement traverse function', function(){
    tree.addChild(5);
    tree.children[0].addChild(7);
    tree.children[0].children[0].addChild(2);
    tree.traverse(function(value) {
      value *= 2;
      return value;
    });
    expect(tree.children[0].value).to.equal(10);
    expect(tree.children[0].children[0].value).to.equal(14);
    expect(tree.children[0].children[0].children[0].value).to.equal(4);
  });

});
