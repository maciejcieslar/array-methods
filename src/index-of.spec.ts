import { testArrayMethod } from './test-utils';

import { indexOf } from './index-of';

test('should work like indexOf', () => {
  const testIndexOf = testArrayMethod([1, 2, 3, 4, 5], indexOf);

  testIndexOf(1);
  testIndexOf(6);
});
