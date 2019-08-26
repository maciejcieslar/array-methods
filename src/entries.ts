export function entries<T>(array: T[]) {
  const { length } = array;

  function* createGenerator() {
    for (let index = 0; index < length; index += 1) {
      const value = array[index];

      yield [index, value];
    }
  }

  return createGenerator();
}
