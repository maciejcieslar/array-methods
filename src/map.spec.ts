import { testArrayMethod } from './test-utils';

import { map } from './map';

test('should work like map', () => {
  const testMap = testArrayMethod([1, 2, 3, 4, 5], map);

  testMap(value => value + 5);
  testMap(value => value + 10);
});
