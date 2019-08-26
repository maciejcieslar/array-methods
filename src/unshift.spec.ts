import { testArrayMethod } from './test-utils';

import { unshift } from './unshift';

test('should work like some', () => {
  const testUnshift = testArrayMethod([1, 2, 3, 4, 5], unshift);

  testUnshift();
});
