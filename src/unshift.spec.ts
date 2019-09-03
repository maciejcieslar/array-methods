import { testArrayMethod } from './test-utils';

import { unshift } from './unshift';

test('should work like unshift', () => {
  const testUnshift = testArrayMethod([1, 2, 3, 4, 5], unshift);

  testUnshift();
});
