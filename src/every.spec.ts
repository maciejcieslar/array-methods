import { testArrayMethod } from './test-utils';

import { every } from './every';

test('should work like every', () => {
  const testEvery = testArrayMethod([1, 2, 3, 4, 5], every, false);

  testEvery((value: number) => Number.isInteger(value));
  testEvery((value: number) => Number.isNaN(value));
});
