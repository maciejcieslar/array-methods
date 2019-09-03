import { testArrayMethod } from './test-utils';

import { pop } from './pop';

test('should work like pop', () => {
  const testPop = testArrayMethod([1, 2, 3, 4, 5], pop);

  testPop();
});
