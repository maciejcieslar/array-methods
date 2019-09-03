import { testArrayMethod } from './test-utils';

import { findIndex } from './find-index';

test('should work like findIndex', () => {
  const testFindIndex = testArrayMethod([1, 2, 3, 4, 5], findIndex, false);

  testFindIndex((value: number) => value === 3);
  testFindIndex((value: number) => Number.isNaN(value));
});
