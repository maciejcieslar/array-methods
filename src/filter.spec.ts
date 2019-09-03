import { testArrayMethod } from './test-utils';

import { filter } from './filter';

test('should work like filter', () => {
  const testFilter = testArrayMethod([1, 2, 3, 4, 5], filter);

  testFilter((value: number, index: number) => index >= 3);
  testFilter((value: number) => Number.isNaN(value));
});
