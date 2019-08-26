import { testArrayMethod } from './test-utils';

import { includes } from './includes';

test('should work like includes', () => {
  const testFlat = testArrayMethod([1, 2, 3, 4, 5], includes, false);

  testFlat(5);
  testFlat(6);
});
