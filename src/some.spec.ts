import { testArrayMethod } from './test-utils';

import { some } from './some';

test('should work like some', () => {
  const testSome = testArrayMethod([1, 2, 3, 4, 5], some);

  testSome(value => value === 5);
  testSome(value => value === 6);
});
