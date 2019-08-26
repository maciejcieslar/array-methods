export function keys(array: unknown[]) {
  function* createGenerator() {
    const { length } = array;

    for (let index = 0; index < length; index += 1) {
      yield index;
    }
  }

  return createGenerator();
}
