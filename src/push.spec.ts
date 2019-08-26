import { testArrayMethod } from './test-utils';

import { push } from './push';

test('should work like push', () => {
  const testPush = testArrayMethod([1, 2, 3, 4, 5], push);

  testPush(6, 7, 8);
  testPush([6, 7, 8]);
});
