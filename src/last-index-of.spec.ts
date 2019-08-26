import { testArrayMethod } from './test-utils';

import { lastIndexOf } from './last-index-of';

test('should work like lastIndexOf', () => {
  const testLastIndexOf = testArrayMethod([1, 1, 1, 1, 1], lastIndexOf);

  testLastIndexOf(2);
  testLastIndexOf(1);
});
