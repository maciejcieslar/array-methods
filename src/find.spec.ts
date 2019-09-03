import { testArrayMethod } from './test-utils';

import { find } from './find';

test('should work like find', () => {
  const testFind = testArrayMethod([1, 2, 3, 4, 5], find, false);

  testFind((value: number) => value === 3);
  testFind((value: number) => Number.isNaN(value));
});
