var HashTable = function () {
    this._limit = 4;
    this._storage = makeLimitedArray(this._limit);
    this._count = 0;
};

/**
 * Time Complexity: Linear (becuase of checkHashSize, otherwise constant)
 */
HashTable.prototype.insert = function (k, v) {
<<<<<<< HEAD
    var i = getIndexBelowMaxForKey(k, this._limit);
    // get the array at this point
    var val_array = this._storage.get(i) || [];
    // push a value to that array
    val_array.push([k, v]);
    // store that array
    this._storage.set(i, val_array);
=======
    var hashIndex = getIndexBelowMaxForKey(k, this._limit);
    var valueArray = this._storage.get(hashIndex) || [];
    if (this.retrieve(k)) {
        this.remove(k);
    }
    valueArray.push([k, v]);
    this._count++;
    this._storage.set(hashIndex, valueArray);
    this.checkHashSize();
>>>>>>> b9c6f8ebfd28572084b34f9fae38cbae8bc3cc19
};

/**
 * Time Complexity: Logrithmic because for loop does not have to go all the way through
 */
HashTable.prototype.retrieve = function (k) {
<<<<<<< HEAD
    var i = getIndexBelowMaxForKey(k, this._limit);
    // get the value in the array
    var val_array = this._storage.get(i);
    //loop through that array
    for (var i = 0; i < val_array.length; i++) {
        if (val_array[i][0] === k) {
            return val_array[i][1];
        }
=======
    var hashIndex = getIndexBelowMaxForKey(k, this._limit);
    var valueArray = this._storage.get(hashIndex) || [];
    for (var i = 0; i < valueArray.length; i++) {
      if (valueArray[i][0] === k) {
        return valueArray[i][1];
      }
>>>>>>> b9c6f8ebfd28572084b34f9fae38cbae8bc3cc19
    }
    return null;
};

/**
 * Time Complexity: Linear
 */
HashTable.prototype.remove = function (k) {
    var hashIndex = getIndexBelowMaxForKey(k, this._limit);
    // get the array at the i position
    var valueArray = this._storage.get(hashIndex) || [];
    // loop through the array
<<<<<<< HEAD
    for (var i = 0; i < val_array.length; i++) {
        if (val_array[i][0] === k) {
            val_array.splice(i, 1);
        }
=======
    for (var i = 0; i < valueArray.length; i++) {
      if (valueArray[i][0] === k) {
        this._count--;
        valueArray.splice(i, 1);
      }
>>>>>>> b9c6f8ebfd28572084b34f9fae38cbae8bc3cc19
    }
    // re-set the array
    this._storage.set(hashIndex, valueArray);
    this.checkHashSize();
};

<<<<<<< HEAD
/*
 * Complexity: What is the time complexity of the above functions?
 */
=======
/**
 * Time Complexity: Linear
 */
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
          var valueArray = val;
          for (var i = 0; i < valueArray.length; i++) {
            var k = valueArray[i][0];
            var v = valueArray[i][1];
            var hashIndex = getIndexBelowMaxForKey(k, this._limit);
            var new_val_array = _newStorage.get(hashIndex) || [];
            new_val_array.push([k, v]);
            newCounter++;
            _newStorage.set(hashIndex, new_val_array);
          }
        }
      });
      this._storage = _newStorage;
      this._count = newCounter;
    }
  }
};
>>>>>>> b9c6f8ebfd28572084b34f9fae38cbae8bc3cc19
