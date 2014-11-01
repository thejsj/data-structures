var HashTable = function () {
    this._limit = 4;
    this._storage = makeLimitedArray(this._limit);
    this._count = 0;
};

HashTable.prototype.insert = function (k, v) {
    var i = getIndexBelowMaxForKey(k, this._limit);
    // get the array at this point
    var val_array = this._storage.get(i) || [];
    // push a value to that array
    if (this.retrieve(k)) {
        this.remove(k);
    }
    val_array.push([k, v]);
    // store that array
    this._count++;
    this._storage.set(i, val_array);
    this.checkHashSize();
};

HashTable.prototype.retrieve = function (k) {
    var i = getIndexBelowMaxForKey(k, this._limit);
    // get the value in the array
    var val_array = this._storage.get(i) || [];
    //loop through that array
    for (var i = 0; i < val_array.length; i++) {
        if (val_array[i][0] === k) {
            return val_array[i][1];
        }
    }
    return null;
};

HashTable.prototype.remove = function (k) {
    var i = getIndexBelowMaxForKey(k, this._limit);
    // get the array at the i position
    var val_array = this._storage.get(i) || [];
    // loop through the array
    for (var i = 0; i < val_array.length; i++) {
        if (val_array[i][0] === k) {
            this._count--;
            val_array.splice(i, 1);
        }
    }
    // re-set the array
    this._storage.set(i, val_array);
    this.checkHashSize();
};

HashTable.prototype.checkHashSize = function() {
  if (this._count > 0) {
    if (this._count > (this._limit * 0.75) || (this._count) < (this._limit * 0.25)) {
      var saver = this._limit;
      if (this._count > (this._limit * 0.75)) {
        this._limit *= 2;
      } else {
        this._limit /= 2;
      }
      var _newStorage = makeLimitedArray(this._limit);
      var newCounter = 0;
      this._storage.each(function(val, i, arr) {
        if (Array.isArray(val)) {
          var val_array = val;
          console.log(val_array.length);
          for (var i = 0; i < val_array.length; i++) {
            var k = val_array[i][0];
            var v = val_array[i][1];
            var ii = getIndexBelowMaxForKey(k, this._limit);
            var new_val_array = _newStorage.get(ii) || [];
            new_val_array.push([k, v]);
            newCounter++;
            _newStorage.set(ii, new_val_array);
          }
        }
      });
      this._storage = _newStorage;
      this._count = newCounter;
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
