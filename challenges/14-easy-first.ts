import {Equal, Expect} from '@type-challenges/utils';

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, {a: string}]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
];

type First<T extends any[]> = T extends NonEmptyArray<T> ? T[0] : never;

// eslint-disable-next-line no-unused-vars
type NonEmptyArray<T> = [any, ...any];

export {cases};
