var HashTable = function () {
    this._limit = 8;
    this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function (k, v) {
    var i = getIndexBelowMaxForKey(k, this._limit);
    // get the array at this point
    var val_array = this._storage.get(i) || [];
    // push a value to that array
    val_array.push({
        'k': k,
        'v': v
    });
    // store that array
    this._storage.set(i, val_array);
};

HashTable.prototype.retrieve = function (k) {
    var i = getIndexBelowMaxForKey(k, this._limit);
    // get the value in the array
    var val_array = this._storage.get(i);
    //loop through that array
    for (var ii = 0; i < val_array.length; ii++) {
        if (val_array[ii].k === k) {
            return val_array[ii].v;
        }
    }
    return null;
};

HashTable.prototype.remove = function (k) {
    var i = getIndexBelowMaxForKey(k, this._limit);
    // get the array at the i position
    var val_array = this._storage.get(i);
    // loop through the array
    for (var ii = 0; ii < val_array.length; ii++) {
        if (val_array[ii].k === k) {
            val_array.splice(ii, 1);
        }
    }
    // re-set the array
    this._storage.set(i, val_array);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */