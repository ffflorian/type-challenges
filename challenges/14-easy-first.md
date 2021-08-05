## ["First of Array" by Anthony Fu](http://type-tetris.ldlework.com/14-easy-first/)

Implement a generic that takes an Array and returns it's first element's type.

For example

```ts
type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
```
