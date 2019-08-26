export function reverse<T>(array: T[]) {
  const result = [];

  const lastIndex = array.length - 1;

  for (let index = lastIndex; index > -1; index -= 1) {
    const value = array[index];

    result[lastIndex - index] = value;
  }

  return result;
}
