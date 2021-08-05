## ["Tuple to Object" by sinoon](http://type-tetris.ldlework.com/11-easy-tuple-to-object/)

Given an array, transform to a object type and the key/value must in the given array.

For example

```ts
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

const result: TupleToObject<typeof tuple>; // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
```
