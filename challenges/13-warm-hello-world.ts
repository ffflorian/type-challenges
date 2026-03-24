import {Equal, Expect, NotAny} from '@type-challenges/utils';

type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>];

type HelloWorld = string;

export {cases};
