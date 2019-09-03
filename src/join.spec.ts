import { testArrayMethod } from './test-utils';

import { join } from './join';

test('should work like join', () => {
  const testJoin = testArrayMethod([1, 2, 3, 4, 5], join);

  testJoin(', ');
  testJoin('');
});
