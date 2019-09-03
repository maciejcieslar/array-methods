import { testArrayMethod } from './test-utils';

import { splice } from './splice';

test('should work like splice', () => {
  const testSplice = testArrayMethod([1, 2, 3, 4, 5], splice);

  testSplice(1, 2, 3);
  testSplice(5, 7, 1);
});
