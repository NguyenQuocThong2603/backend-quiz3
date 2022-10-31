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
  * [Lodash Methods](#lodash-methods)
    * [_.chunk](#-_chunk-array-size1)
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

#### &nbsp;&nbsp;&nbsp; **Array.from()**

&nbsp;&nbsp;&nbsp; The  `Array.from()` static method creates a new, shallow-copied Array instance from an iterable or array-like object.

```js
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
```

#### &nbsp;&nbsp;&nbsp; **Array.concat()**

&nbsp;&nbsp;&nbsp; The `concat()` method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

```js
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
```

#### &nbsp;&nbsp;&nbsp; **Array.every()**

&nbsp;&nbsp;&nbsp; The `every()` method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

```js
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true
```

#### &nbsp;&nbsp;&nbsp; **Array.fill()**

&nbsp;&nbsp;&nbsp; The `fill()` method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the &nbsp;&nbsp;&nbsp;&nbsp;modified array.

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

#### &nbsp;&nbsp;&nbsp; **Array.filter()**

&nbsp;&nbsp;&nbsp; The `filter()` method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test &nbsp;&nbsp;&nbsp;&nbsp;implemented by the provided function.

```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

#### &nbsp;&nbsp;&nbsp; **Array.find()**

&nbsp;&nbsp;&nbsp; The `find()` method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, &nbsp;&nbsp;&nbsp;&nbsp;undefined is returned.

```js
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12
```

#### &nbsp;&nbsp;&nbsp; **Array.findLast()**

&nbsp;&nbsp;&nbsp; The `findLast()` method iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no &nbsp;&nbsp;&nbsp;&nbsp;elements satisfy the testing function, undefined is returned.

```js
const array1 = [5, 12, 50, 130, 44];

const found = array1.findLast((element) => element > 45);

console.log(found);
// expected output: 130
```

#### &nbsp;&nbsp;&nbsp; **Array.includes()**

&nbsp;&nbsp;&nbsp; The `includes()` method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

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

#### &nbsp;&nbsp;&nbsp; **Array.isArray()**

&nbsp;&nbsp;&nbsp; `Array.isArray()` checks if the passed value is an Array. It does not check the value's prototype 
chain, nor does it rely on the Array constructor it is &nbsp;&nbsp;&nbsp;attached to. It returns true for any value that was created using the array literal syntax or the Array constructor. This makes it safe to use with cross-realm &nbsp;&nbsp;&nbsp;objects, where the identity of the Array constructor is different and would therefore cause instanceof Array to fail.

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

#### &nbsp;&nbsp;&nbsp; **Array.join()**

&nbsp;&nbsp;&nbsp; The `join()` method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a &nbsp;&nbsp;&nbsp;&nbsp;specified separator string. If the array has only one item, then that item will be returned without using the separator.

```js
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
```

#### &nbsp;&nbsp;&nbsp; **Array.map()**

&nbsp;&nbsp;&nbsp; The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.

```js
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

#### &nbsp;&nbsp;&nbsp; **Array.reduce()**

&nbsp;&nbsp;&nbsp; The `reduce()` method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the &nbsp;&nbsp;&nbsp;&nbsp;calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

&nbsp;&nbsp;&nbsp;&nbsp;The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise &nbsp;&nbsp;&nbsp;&nbsp;the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

&nbsp;&nbsp;&nbsp;&nbsp;Perhaps the easiest-to-understand case for `reduce()` is to return the sum of all the elements in an array:

&nbsp;&nbsp;&nbsp;&nbsp;The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous step (this result is the &nbsp;&nbsp;&nbsp;&nbsp;running sum of all the previous steps) — until there are no more elements to add.

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

#### &nbsp;&nbsp;&nbsp; **Array.reverse()**

&nbsp;&nbsp;&nbsp; The `reverse()` method reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last &nbsp;&nbsp;&nbsp;&nbsp;array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.

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

#### &nbsp;&nbsp;&nbsp; **Array.shift()**

&nbsp;&nbsp;&nbsp; The `shift()` method removes the first element from an array and returns that removed element. This method changes the length of the array.

```js
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1
```

#### &nbsp;&nbsp;&nbsp; **Array.slice()**

&nbsp;&nbsp;&nbsp; The `slice()` method returns a shallow copy of a portion of an array into a new array object selected from `start` to `end` (end not included) where `start`  &nbsp;&nbsp;&nbsp;&nbsp;and `end` represent the index of items in that array. The original array will not be modified

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

#### &nbsp;&nbsp;&nbsp; **Array.some()**

&nbsp;&nbsp;&nbsp; The `some()` method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it &nbsp;&nbsp;&nbsp;&nbsp;finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

```js
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true
```

#### &nbsp;&nbsp;&nbsp; **Array.splice()**

&nbsp;&nbsp;&nbsp; The `splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of &nbsp;&nbsp;&nbsp;&nbsp;an array without modifying it, see [slice](#arrayslice).

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

#### &nbsp;&nbsp;&nbsp; **Array.sort()**

&nbsp;&nbsp;&nbsp; The `sort()` method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, &nbsp;&nbsp;&nbsp;&nbsp;built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

&nbsp;&nbsp;&nbsp;&nbsp;The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

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

> ### Lodash Methods

#### &nbsp;&nbsp;&nbsp; **_.chunk (array, \[size=1\])**

&nbsp;&nbsp;&nbsp;

&nbsp;&nbsp;&nbsp; Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

```js
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```