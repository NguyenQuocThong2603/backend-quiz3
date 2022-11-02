# Table of Contents

* ## [Array](#array)

  * [Property](#property)

  * [Methods](#methods)
    * [Array.from()](#arrayfrom)
    * [Array.concat()](#arrayconcat)
    * [Array.every()](#arrayevery)
    * [Array.flll()](#arrayfill)
    * [Array.filter()](#arrayfilter)
    * [Array.find()](#arrayfind)
    * [Array.findLast()](#arrayfindlast)
    * [Array.includes()](#arrayincludes)
    * [Array.isArray()](#arrayisarray)
    * [Array.join()](#arrayjoin)
    * [Array.map()](#arraymap)
    * [Array.reduce()](#arrayreduce)
    * [Array.reverse()](#arrayreverse)
    * [Array.shift()](#arrayshift)
    * [Array.slice()](#arrayslice)
    * [Array.some()](#arraysome)
    * [Array.splice()](#arraysplice)
    * [Array.sort()](#arraysort)
  
* ## [Lodash](#lodash-1)  
  
  * [Lodash Array Methods](#lodash-array-methods)

    * [_.chunk](#_chunk-array-size1)
    * [_.compact](#_compact-array)
    * [_.concat](#_concat-array-values)
    * [_.difference](#_difference-array-values)
    * [_.differenceBy](#_differenceby-array-valuesiteratee--_identity)
    * [_.differenceWith](#_differencewith-array-valuescomparator)
    * [_.drop](#_drop-array-n1)
    * [_.dropWhile](#_dropwhile-array-predicate--_identity)
    * [_.fill](#_fill-array-valuestart0endarraylength)
    * [_.findIndex](#_findindex-array-predicate--_identity-fromindex--0)
    * [_.flattenDepth](#_flattendeptharray-depth1)
    * [_.fromPairs](#_frompairspairs)
    * [_.head](#_headarray)
    * [_.initial](#_initialarray)
    * [_.intersection](#_intersectionarrays)
    * [_.last](#_lastarray)
    * [_.nth](#_ntharrayn--0)
    * [_.pull](#_pullallarray-values)
    * [_.remove](#_removearray-predicate--_identity)
    * [_.sortedIndex](#_sortedindexarray-value)
    * [_.tail](#_tailarray)
    * [_.take](#_takearray-n1)
    * [_.union](#_unionarrays)
    * [_.uniq](#_uniqarray)
    * [_.zip](#_ziparrays)
    * [_.zipObject](#_zipobjectarrays)
    * [_.xor](#_xorarrays)

  * [Lodash Object Methods](#lodash-object-methods)
    * [_.at](#_atobjectpaths)
    * [_.default](#_defaultobjectsources)
    * [_.findKey](#_findkeyobjectpredicate--_identity)
    * [_.forIn](#_forinobjectiteratee--_identity)
    * [_.forOwn](#_forownobjectiteratee--_identity)
    * [_.get](#_getobject-path-defaultvalue)
    * [_.has](#_hasobject-path)
    * [_.invert](#_invertobject)
    * [_.invoke](#_invokeobject-path-args)
    * [_.keys](#_keysobject)
    * [_.mapValues](#_mapvaluesobject-iteratee--_identity)
    * [_.merge](#_mergeobject-sources)
    * [_.omit](#_omitobject-paths)
    * [_.pick](#_pickobject-paths)
    * [_.set](#_setobject-path-value)

## Array

 >### Property

* Arrays are resizable and can contain a mix of different data types.

* JavaScript arrays are not associative arrays and so, JavaScript does not support arrays with named indexes. In JavaScript, arrays always use numbered indexes.  

* **WARNING !!**
  * If you use named indexes, JavaScript will redefine the array to an object.

  * After that, some array methods and properties will produce incorrect results.

```js
const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;     // Will return 0
person[0];         // Will return undefined
```

* JavaScript array-copy operations create shallow copies rather than deep copy

> ### Methods

#### **Array.from()**

The  `Array.from()` static method creates a new, shallow-copied Array instance from an iterable or array-like object.

```js
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
```

#### **Array.concat()**

The `concat()` method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

```js
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
```

#### **Array.every()**

The `every()` method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

```js
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true
```

#### **Array.fill()**

The `fill()` method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.

```js
const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]
// expected output: true
```

#### **Array.filter()**

The `filter()` method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the testimplemented by the provided function.

```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

#### **Array.find()**

The `find()` method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

```js
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12
```

#### **Array.findLast()**

The `findLast()` method iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.

```js
const array1 = [5, 12, 50, 130, 44];

const found = array1.findLast((element) => element > 45);

console.log(found);
// expected output: 130
```

#### **Array.includes()**

The `includes()` method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

```js
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false
```

#### **Array.isArray()**

`Array.isArray()` checks if the passed value is an Array. It does not check the value's prototype chain, nor does it rely on the Array constructor it isattached to. It returns true for any value that was created using the array literal syntax or the Array constructor. This makes it safe to use with cross-realmobjects, where the identity of the Array constructor is different and would therefore cause instanceof Array to fail.

```js
// all following calls return true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array("a", "b", "c", "d"));
Array.isArray(new Array(3));
// Little known fact: Array.prototype itself is an array:
Array.isArray(Array.prototype);

// all following calls return false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
// This is not an array, because it was not created using the
// array literal syntax or the Array constructor
Array.isArray({ __proto__: Array.prototype });
```

#### **Array.join()**

The `join()` method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

```js
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
```

#### **Array.map()**

The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.

```js
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

#### **Array.reduce()**

The `reduce()` method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).
Perhaps the easiest-to-understand case for `reduce()` is to return the sum of all the elements in an array:
The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous step (this result is the running sum of all the previous steps) — until there are no more elements to add.

```js
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10
```

#### **Array.reverse()**

The `reverse()` method reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.

```js
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// expected output: "array1:" Array ["three", "two", "one"]
```

#### **Array.shift()**

The `shift()` method removes the first element from an array and returns that removed element. This method changes the length of the array.

```js
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1
```

#### **Array.slice()**

The `slice()` method returns a shallow copy of a portion of an array into a new array object selected from `start` to `end` (end not included) where `start`  and `end` represent the index of items in that array. The original array will not be modified

```js
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
```

#### **Array.some()**

The `some()` method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

```js
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true
```

#### **Array.splice()**

The `splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see [slice](#arrayslice).

```js
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
```

#### **Array.sort()**

The `sort()` method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

```js
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
```

## Lodash

> ### Lodash Array Methods

#### **_.chunk (array, \[size=1\])**

Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

```js
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```

#### **_.compact (array)**

Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

```js
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
```

#### **_.concat (array, [values])**

Creates a new array concatenating array with any additional arrays and/or values.

```js
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]
```

#### **_.difference (array, [values])**

Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

**Note**: Unlike `_.pullAll`, this method returns a new array.

```js
_.difference([2, 1], [2, 3]);
// => [1]
```

#### **_.differenceBy (array, [values],[iteratee = _.identity])**

This method is like _.difference except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. The order and references of result values are determined by the first array. The iteratee is invoked with one argument:
(value).

**Note**: Unlike `_.pullAllBy`, this method returns a new array.

```js
_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [1.2]
 
// The `_.property` iteratee shorthand.
_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
// => [{ 'x': 2 }]
```

#### **_.differenceWith (array, [values],[comparator])**

This method is like _.difference except that it accepts comparator which is invoked to compare elements of array to values. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: (arrVal, othVal).

**Note**: Unlike `_.pullAllWith`, this method returns a new array.

```js
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 
_.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
// => [{ 'x': 2, 'y': 1 }]
```

#### **_.drop (array, [n=1])**

Creates a slice of array with n elements dropped from the beginning.

```js
_.drop([1, 2, 3]);
// => [2, 3]
 
_.drop([1, 2, 3], 2);
// => [3]
 
_.drop([1, 2, 3], 5);
// => []
 
_.drop([1, 2, 3], 0);
// => [1, 2, 3]
```

#### **_.dropWhile (array, [predicate = _.identity])**

Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).

```js
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];
 
_.dropWhile(users, function(o) { return !o.active; });
// => objects for ['pebbles']
 
// The `_.matches` iteratee shorthand.
_.dropWhile(users, { 'user': 'barney', 'active': false });
// => objects for ['fred', 'pebbles']
 
// The `_.matchesProperty` iteratee shorthand.
_.dropWhile(users, ['active', false]);
// => objects for ['pebbles']
 
// The `_.property` iteratee shorthand.
_.dropWhile(users, 'active');
// => objects for ['barney', 'fred', 'pebbles']
```

#### **_.fill (array, value,[start=0],[end=array.length])**

Fills elements of array with value from start up to, but not including, end.

**Note**: This method mutates array.

```js
var array = [1, 2, 3];
 
_.fill(array, 'a');
console.log(array);
// => ['a', 'a', 'a']
 
_.fill(Array(3), 2);
// => [2, 2, 2]
 
_.fill([4, 6, 8, 10], '*', 1, 3);
// => [4, '*', '*', 10]
```

#### **_.findIndex (array, [predicate = _.identity], [fromIndex = 0])**

This method is like _.find except that it returns the index of the first element predicate returns truthy for instead of the element itself.

```js
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];
 
_.findIndex(users, function(o) { return o.user == 'barney'; });
// => 0
 
// The `_.matches` iteratee shorthand.
_.findIndex(users, { 'user': 'fred', 'active': false });
// => 1
 
// The `_.matchesProperty` iteratee shorthand.
_.findIndex(users, ['active', false]);
// => 0
 
// The `_.property` iteratee shorthand.
_.findIndex(users, 'active');
// => 2
```

#### **_.flattenDepth(array, [depth=1])**

Recursively flatten array up to depth times.

```js
var array = [1, [2, [3, [4]], 5]];
 
_.flattenDepth(array, 1);
// => [1, 2, [3, [4]], 5]
 
_.flattenDepth(array, 2);
// => [1, 2, 3, [4], 5]
```

#### **_.fromPairs(pairs)**

The inverse of _.toPairs; this method returns an object composed from key-value pairs.

```js
_.fromPairs([['a', 1], ['b', 2]]);
// => { 'a': 1, 'b': 2 }
```

#### **_.head(array)**

Gets the first element of array.

```js
_.head([1, 2, 3]);
// => 1
 
_.head([]);
// => undefined
```

#### **_.initial(array)**

Gets all but the last element of array.

```js
_.initial([1, 2, 3]);
// => [1, 2]
```

#### **_.intersection([arrays])**

Creates an array of unique values that are included in all given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

```js
_.intersection([2, 1], [2, 3]);
// => [2]
```

#### **_.last(array)**

Gets the last element of array.

```js
_.last([1, 2, 3]);
// => 3
```

#### **_.nth(array,[n = 0])**

Gets the element at index n of array. If n is negative, the nth element from the end is returned.

```js
var array = ['a', 'b', 'c', 'd'];
 
_.nth(array, 1);
// => 'b'
 
_.nth(array, -2);
// => 'c';
```

#### **_.pullAll(array, values)**

Removes all given values from array using SameValueZero for equality comparisons.

**Note**: Unlike `_.difference`, this method mutates array. Use _.remove to remove elements from an array by predicate.

```js
var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 
_.pull(array, 'a', 'c');
console.log(array);
// => ['b', 'b']
```

#### **_.remove(array, [predicate = _.identity])**

Removes all elements from array that predicate returns truthy for and returns an array of the removed elements. The predicate is invoked with three arguments: (value, index, array).

**Note**: Unlike `_.filter`, this method mutates array. Use `_.pull` to pull elements from an array by value.

```js
var array = [1, 2, 3, 4];
var evens = _.remove(array, function(n) {
  return n % 2 == 0;
});
 
console.log(array);
// => [1, 3]
 
console.log(evens);
// => [2, 4]
```

#### **_.sortedIndex(array, value)**

Uses a binary search to determine the lowest index at which value should be inserted into array in order to maintain its sort order.

```js
_.sortedIndex([30, 50], 40);
// => 1
```

#### **_.tail(array)**

Gets all but the first element of array.

```js
_.tail([1, 2, 3]);
// => [2, 3]
```

#### **_.take(array, [n=1])**

Creates a slice of array with n elements taken from the beginning.

```js
_.take([1, 2, 3]);
// => [1]
 
_.take([1, 2, 3], 2);
// => [1, 2]
 
_.take([1, 2, 3], 5);
// => [1, 2, 3]
 
_.take([1, 2, 3], 0);
// => []
```

#### **_.union([arrays])**

Creates an array of unique values, in order, from all given arrays using SameValueZero for equality comparisons.

```js
_.union([2], [1, 2]);
// => [2, 1]
```

#### **_.uniq(array)**

Creates a duplicate-free version of an array, using SameValueZero for equality comparisons, in which only the first occurrence of each element is kept. The order of result values is determined by the order they occur in the array.

```js
_.uniq([2, 1, 2]);
// => [2, 1]
```

#### **_.zip([arrays])**

Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.

```js
_.zip(['a', 'b'], [1, 2], [true, false]);
// => [['a', 1, true], ['b', 2, false]]
```

#### **_.zipObject([arrays])**

This method is like `_.fromPairs`except that it accepts two arrays, one of property identifiers and one of corresponding values.

```js
_.zipObject(['a', 'b'], [1, 2]);
// => { 'a': 1, 'b': 2 }
```

#### **_.xor([arrays])**

Creates an array of unique values that is the symmetric difference of the given arrays. The order of result values is determined by the order they occur in the arrays.

```js
_.xor([2, 1], [2, 3]);
// => [1, 3]
```

> ### Lodash Object Methods

#### **_.at(object,[paths])**

Creates an array of values corresponding to paths of object.

```js
var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
 
_.at(object, ['a[0].b.c', 'a[1]']);
// => [3, 4]
```

#### **_.create(object,[properties])**

Creates an object that inherits from the prototype object. If a properties object is given, its own enumerable string keyed properties are assigned to the created object.

```js
function Shape() {
  this.x = 0;
  this.y = 0;
}
 
function Circle() {
  Shape.call(this);
}
 
Circle.prototype = _.create(Shape.prototype, {
  'constructor': Circle
});
 
var circle = new Circle;
circle instanceof Circle;
// => true
 
circle instanceof Shape;
// => true
```

#### **_.default(object,[sources])**

Assigns own and inherited enumerable string keyed properties of source objects to the destination object for all destination properties that resolve to undefined. Source objects are applied from left to right. Once a property is set, additional values of the same property are ignored.

**Note**: This method mutates object.

```js
_.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
// => { 'a': 1, 'b': 2 }
```

#### **_.findKey(object,[predicate = _.identity])**

This method is like `_.find` except that it returns the key of the first element predicate returns truthy for instead of the element itself.

```js
var users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};
 
_.findKey(users, function(o) { return o.age < 40; });
// => 'barney' (iteration order is not guaranteed)
 
// The `_.matches` iteratee shorthand.
_.findKey(users, { 'age': 1, 'active': true });
// => 'pebbles'
 
// The `_.matchesProperty` iteratee shorthand.
_.findKey(users, ['active', false]);
// => 'fred'
 
// The `_.property` iteratee shorthand.
_.findKey(users, 'active');
// => 'barney'
```

#### **_.forIn(object,[iteratee = _.identity])**

Iterates over own and inherited enumerable string keyed properties of an object and invokes iteratee for each property. The iteratee is invoked with three arguments: (value, key, object). Iteratee functions may exit iteration early by explicitly returning false.

```js
function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.forIn(new Foo, function(value, key) {
  console.log(key);
});
// => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
```

#### **_.forOwn(object,[iteratee = _.identity])**

Iterates over own enumerable string keyed properties of an object and invokes iteratee for each property. The iteratee is invoked with three arguments: (value, key, object). Iteratee functions may exit iteration early by explicitly returning false.

```js
function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.forOwn(new Foo, function(value, key) {
  console.log(key);
});
// => Logs 'a' then 'b' (iteration order is not guaranteed).
```

#### **_.get(object, path, [defaultValue])**

Gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place.

```js
var object = { 'a': [{ 'b': { 'c': 3 } }] };
 
_.get(object, 'a[0].b.c');
// => 3
 
_.get(object, ['a', '0', 'b', 'c']);
// => 3
 
_.get(object, 'a.b.c', 'default');
// => 'default'
```

#### **_.has(object, path)**

Checks if path is a direct property of object.

```js
var object = { 'a': { 'b': 2 } };
var other = _.create({ 'a': _.create({ 'b': 2 }) });
 
_.has(object, 'a');
// => true
 
_.has(object, 'a.b');
// => true
 
_.has(object, ['a', 'b']);
// => true
 
_.has(other, 'a');
// => false
```

#### **_.invert(object)**

Creates an object composed of the inverted keys and values of object. If object contains duplicate values, subsequent values overwrite property assignments of previous values.

```js
var object = { 'a': 1, 'b': 2, 'c': 1 };
 
_.invert(object);
// => { '1': 'c', '2': 'b' }
```

#### **_.invoke(object, path, [args])**

Invokes the method at path of object.

```js
var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
 
_.invoke(object, 'a[0].b.c.slice', 1, 3);
// => [2, 3]
```

#### **_.keys(object)**

Creates an array of the own enumerable property names of object.

```js
function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.keys(new Foo);
// => ['a', 'b'] (iteration order is not guaranteed)
 
_.keys('hi');
// => ['0', '1']
```

#### **_.mapValues(object, [iteratee = _.identity])**

Creates an object with the same keys as object and values generated by running each own enumerable string keyed property of object thru iteratee. The iteratee is invoked with three arguments:
(value, key, object).

```js
var users = {
  'fred':    { 'user': 'fred',    'age': 40 },
  'pebbles': { 'user': 'pebbles', 'age': 1 }
};
 
_.mapValues(users, function(o) { return o.age; });
// => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 
// The `_.property` iteratee shorthand.
_.mapValues(users, 'age');
// => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
```

#### **_.merge(object, [sources])**

This method is like `_.assign` except that it recursively merges own and inherited enumerable string keyed properties of source objects into the destination object. Source properties that resolve to undefined are skipped if a destination value exists. Array and plain object properties are merged recursively. Other objects and value types are overridden by assignment. Source objects are applied from left to right. Subsequent sources overwrite property assignments of previous sources.

```js
var object = {
  'a': [{ 'b': 2 }, { 'd': 4 }]
};
 
var other = {
  'a': [{ 'c': 3 }, { 'e': 5 }]
};
 
_.merge(object, other);
// => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
```

#### **_.omit(object, [paths])**

The opposite of `_.pick`; this method creates an object composed of the own and inherited enumerable property paths of object that are not omitted.

**Note**: This method is considerably slower than `_.pick`.

```js
var object = { 'a': 1, 'b': '2', 'c': 3 };
 
_.omit(object, ['a', 'c']);
// => { 'b': '2' }
```

#### **_.pick(object, [paths])**

Creates an object composed of the picked object properties.

```js
var object = { 'a': 1, 'b': '2', 'c': 3 };
 
_.pick(object, ['a', 'c']);
// => { 'a': 1, 'c': 3 }
```

#### **_.set(object, path, value)**

Sets the value at path of object. If a portion of path doesn't exist, it's created. Arrays are created for missing index properties while objects are created for all other missing properties. Use _.setWith to customize path creation.

**Note**: This method mutates object.

```js
var object = { 'a': [{ 'b': { 'c': 3 } }] };
 
_.set(object, 'a[0].b.c', 4);
console.log(object.a[0].b.c);
// => 4
 
_.set(object, ['x', '0', 'y', 'z'], 5);
console.log(object.x[0].y.z);
// => 5
```

#### **_.toPairs(object)**

Creates an array of own enumerable string keyed-value pairs for object which can be consumed by _.fromPairs. If object is a map or set, its entries are returned.


```js
function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.toPairs(new Foo);
// => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
```