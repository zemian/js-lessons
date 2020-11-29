//
// ## Array - List/DynamicArray
//
let array = [9, 8, 7];
console.log("array " + array);

// Get size
console.log("array size " + array.length);

// Get item from array
console.log("array item " + array[0]);
console.log("array item " + array[1]);
console.log("array item " + array[2]);

// Mix data type in Array
let fooList = ['foo', 3, 2, 1, 'bar'];
console.log('foo list ' + fooList);

// empty array
array = [];
console.log("empty array " + array);

// Add or update/replace item to Array
array[0] = 7;
array[1] = 8;
array[2] = 9;
console.log("array add " + array);

// Delete item from Array
array.splice(0, 1);
console.log("array delete " + array);

//
// ## Map object - Lookup Table/Dictionary/AssociativeArray/HashMap
//
let map = {"foo": 123, "bar": "sample", "baz": "hi"}
console.log("map " + map);
console.log("map " + JSON.stringify(map));

// Get size
console.log("map size " + Object.keys(map).length);

// Get item from Map
console.log("map item foo " + map['foo']);
console.log("map item bar " + map['bar']);
console.log("map item baz " + map['baz']);
console.log("map item baz_BAD_KEY " + map['baz_BAD_KEY']); // => undefined

// Empty map
map = {};
console.log("Empty map " + map);
console.log("Empty map " + JSON.stringify(map));

// Add to Map
map['foo'] = 789;
map['bar'] = "barbar";
console.log("Add to map " + JSON.stringify(map));

// Update Map
map['bar'] = 'bar';
console.log("Update map " + JSON.stringify(map));

// Delete from map
delete map['bar'];
console.log("Delete map " + JSON.stringify(map));
map['foo'] = undefined; // Another way to delete
