import { forEach } from './for-each';

test('should work like forEach', () => {
  const nativeResult = [];
  const methodResult = [];

  forEach([1, 2, 3, 4, 5], val => methodResult.push(val));

  [1, 2, 3, 4, 5].forEach(val => nativeResult.push(val));

  expect(methodResult).toEqual(nativeResult);
});
