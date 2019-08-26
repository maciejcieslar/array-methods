import { testArrayMethod } from './test-utils';

import { reverse } from './reverse';

test('should work like pop', () => {
  const testReverse = testArrayMethod([1, 2, 3, 4, 5], reverse);

  testReverse();
});
