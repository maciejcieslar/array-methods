import { testArrayMethod } from './test-utils';

import { flat } from './flat';

test('should work like flat', () => {
  const testFlat = testArrayMethod([1, 2, 3, 4, 5, [6, 7], [8, 9]], flat);

  testFlat(1);
  testFlat(2);
});
