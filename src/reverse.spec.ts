import { testArrayMethod } from './test-utils';

import { reverse } from './reverse';

test('should work like reverse', () => {
  const testReverse = testArrayMethod([1, 2, 3, 4, 5], reverse);

  testReverse();
});
