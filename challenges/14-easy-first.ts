import {Equal, Expect} from '@type-challenges/utils';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type NonEmptyArray<T> = [any, ...any];

type First<T extends any[]> = T extends NonEmptyArray<T> ? T[0] : never;

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, {a: string}]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
];

export {cases};
