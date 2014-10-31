describe('doublyLinkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeDoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property("head");
    expect(linkedList).to.have.property("tail");
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a("function");
    expect(linkedList.removeHead).to.be.a("function");
    expect(linkedList.contains).to.be.a("function");
  });

  it('should designate a new tail when new nodes are added', function(){
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it("should return the value of the former head when removeHead is called", function(){
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it("should contain a value that was added", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of linkedList
  it('should have and addTohead function', function(){
    linkedList.addToTail(5);
    linkedList.addToHead(9);
    linkedList.addToTail(7);
    expect(linkedList.head.value).to.equal(9);
  });

  it('should have and removeTail function', function(){
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    linkedList.addToTail(4);
    linkedList.removeTail();
    expect(linkedList.tail.value).to.equal(3);
  });

  it('should handle really complicated moving aroung', function(){
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    linkedList.addToTail(4);
    linkedList.addToHead(9);
    linkedList.addToHead(10);
    linkedList.addToHead(12);
    linkedList.addToTail(11);
    linkedList.addToTail(7);
    linkedList.removeHead(); // 10
    linkedList.addToHead(111);
    linkedList.removeHead(); // 10
    linkedList.removeHead(); // 9
    linkedList.addToHead(111);
    linkedList.removeHead(); // 9
    linkedList.removeTail(); // 11
    linkedList.removeTail(); // 4
    linkedList.removeTail(); // 3
    expect(linkedList.tail.value).to.equal(3);
    expect(linkedList.head.value).to.equal(9);
  });
});
