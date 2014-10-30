var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // get the array at this point

  // push a value to that array

  // store that array

  this._storage.set(i, v);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // get the value in the array

  //loop through that array

  // return the value that matches
  return this._storage.get(i); // []
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // get the array at the i position

  // loop through the array

  // remove the approrpiate value

  // re-set the array
  this._storage.set(i, null);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
//[]
