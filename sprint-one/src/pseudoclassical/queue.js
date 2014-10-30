var Queue = function(){
  this.storage = {};
  this.count = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.count] = value;
  this.count += 1;
};

Queue.prototype.dequeue = function(){
  if (this.count) {
    this.count -= 1;
  }
  var result = this.storage[0];
  delete this.storage[0];
  for (var prop in this.storage) {
    this.storage[prop - 1] = this.storage[prop];
  }
  return result;
};

Queue.prototype.size = function(){
  return this.count;
};
