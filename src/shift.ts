export function shift<T>(array: T[]) {
  const { length } = array;
  const firstValue = array[0];

  for (let index = 1; index < length; index += 1) {
    const value = array[index];

    array[index - 1] = value;
  }

  array.length = length - 1;

  return firstValue;
}
