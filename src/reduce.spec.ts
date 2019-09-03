import { testArrayMethod } from './test-utils';

import { reduce } from './reduce';

test('should work like reduce', () => {
  const testReduce = testArrayMethod([1, 2, 3, 4, 5], reduce);

  testReduce((result, curr) => result + curr, 0);
});
