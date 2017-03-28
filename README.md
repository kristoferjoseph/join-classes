join-classes
============

A function that takes input and returns a space delimited list suitable for use as a css class list.

install
-------

`npm i join-classes`


usage
-----

```js
var joinClasses = require('join-classes')
console.log(joinClasses('a', 'b', 'c', 0, -1, function () {}, Object, 'fwee'))
// Outputs: 'a b c fwee'
```
