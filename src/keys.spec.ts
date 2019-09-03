import { keys } from './keys';

test('should work like keys', () => {
  const array = [1, 2];

  const methodValues = keys(array);
  const nativeValues = array.keys();

  const firstMethodValue = methodValues.next();
  const firstNativeValue = nativeValues.next();

  const secondMethodValue = methodValues.next();
  const secondNativeValue = nativeValues.next();

  expect(firstNativeValue).toEqual(firstMethodValue);
  expect(secondNativeValue).toEqual(secondMethodValue);
});
