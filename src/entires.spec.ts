import { entries } from './entries';

test('should work like entries', () => {
  const array = [1, 2];

  const methodValues = entries(array);
  const nativeValues = array.entries();

  const firstMethodValue = methodValues.next();
  const firstNativeValue = nativeValues.next();

  const secondMethodValue = methodValues.next();
  const secondNativeValue = nativeValues.next();

  expect(firstNativeValue).toEqual(firstMethodValue);
  expect(secondNativeValue).toEqual(secondMethodValue);
});
