import {Equal, Expect} from '@type-challenges/utils';

type Awaited<T> = T extends PromiseLike<infer U> ? U : T;

type X = Promise<string>;
type Y = Promise<{field: number}>;

type cases = [Expect<Equal<Awaited<X>, string>>, Expect<Equal<Awaited<Y>, {field: number}>>];
