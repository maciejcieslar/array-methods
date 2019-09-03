import { testArrayMethod } from './test-utils';

import { flatMap } from './flat-map';

test('should work like flatMap', () => {
  const testFlatMap = testArrayMethod([1, 2, 3, 4, 5], flatMap);

  testFlatMap((value: number) => [value, 2, 3]);
  testFlatMap((value: number) => value);
});
