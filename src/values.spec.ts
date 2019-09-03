import { values } from './values';

test('should work like values', () => {
  const array = [1, 2];

  const methodValues = values(array);
  const nativeValues = array.values();

  const firstMethodValue = methodValues.next();
  const firstNativeValue = nativeValues.next();

  const secondMethodValue = methodValues.next();
  const secondNativeValue = nativeValues.next();

  expect(firstNativeValue).toEqual(firstMethodValue);
  expect(secondNativeValue).toEqual(secondMethodValue);
});
