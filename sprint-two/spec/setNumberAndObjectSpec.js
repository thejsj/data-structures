describe('setWithNumberAndObjects', function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it('handle numbers as keys', function() {
    set.add('3');
    set.add(3);
    expect(set.contains('3', true).value).to.equal('3');
    expect(set.contains('3', true).value).to.not.equal(3);
  });

  it('should handle objects as an input', function() {
    var obj = {'key' : 3};
    set.add({'key' : '3'});
    set.add(obj);
    expect(set.contains(obj, true).value).to.equal(obj);
  });

  it('should handle arrays as an input', function() {
    var arr = [1,2,3,4];
    set.add([1, 2, 3]);
    set.add(arr);
    set.add([1, 3]);
    expect(set.contains(arr, true).value).to.equal(arr);
  });
});
