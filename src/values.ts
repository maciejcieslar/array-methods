export function values(array: unknown[]) {
  const { length } = array;

  function* createGenerator() {
    for (let index = 0; index < length; index += 1) {
      const value = array[index];

      yield value;
    }
  }

  return createGenerator();
}
