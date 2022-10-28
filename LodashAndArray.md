# Table of Contents
 * ### [Array](#Array)
   * ### [Property](#Property)
  
# Array

 > ## Property

* Arrays are resizable and can contain a mix of different data types.

* JavaScript arrays are not associative arrays and so, JavaScript does not support arrays with named indexes. In JavaScript, arrays always use numbered indexes.  

**WARNING !!**
  * If you use named indexes, JavaScript will redefine the array to an object.

  * After that, some array methods and properties will produce incorrect results.

Example: 
```js 
const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;     // Will return 0
person[0];         // Will return undefined
```

* JavaScript array-copy operations create shallow copies rather than deep  copy
