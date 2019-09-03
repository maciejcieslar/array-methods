import { testArrayMethod } from './test-utils';

import { concat } from './concat';

test('should work like concat', () => {
  testArrayMethod([1, 2, 3], concat)(4, [5, 6, 7]);
  testArrayMethod([1, 2, 3], concat)(4, 5, 6);
});
