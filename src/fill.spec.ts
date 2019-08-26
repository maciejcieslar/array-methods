import { testArrayMethod } from './test-utils';

import { fill } from './fill';

test('should work like fill', () => {
  const testFill = testArrayMethod([1, 2, 3, 4, 5], fill);

  testFill(0);
  testFill(0, 1, 2);
});
