import { testArrayMethod } from './test-utils';

import { shift } from './shift';

test('should work like shift', () => {
  const testShift = testArrayMethod([1, 2, 3, 4, 5], shift);

  testShift();
});
