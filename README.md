# mround

> Returns a number rounded to the desired multiple

## Description

Similar to the Excel [MROUND function](https://support.office.com/en-us/article/MROUND-function-c299c3b0-15a5-426d-aa4b-d2d5b3baf427)

## Examples

```js
var mround = require('mround');
console.log(mround(49, 50));
// 50
console.log(mround(49, 100));
// 0
console.log(mround(600, 256));
// 512
console.log(mround(49, -50));
// NaN
```

## Running tests
Run mocha tests with `npm test`