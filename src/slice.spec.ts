import { testArrayMethod } from './test-utils';

import { slice } from './slice';

test('should work like slice', () => {
  const testSlice = testArrayMethod([1, 2, 3, 4, 5], slice);

  testSlice(1, 3);
  testSlice(5, 10);
});
